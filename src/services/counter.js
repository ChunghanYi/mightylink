/**
 * Document Download Counter Service
 * Uses Abacus API (public counter) with LocalStorage fallback & caching
 */

const NAMESPACE = 'mightylink.com'
const PRIMARY_API = 'https://abacus.jasoncameron.dev'

const STORAGE_KEY_PREFIX = 'mightylink_doc_count_'

export const DOC_KEYS = {
  AISG: 'doc_aisg',
  CONNECT: 'doc_connect'
}

/**
 * Get cached count from localStorage
 */
export function getLocalCount(docKey) {
  try {
    const val = localStorage.getItem(`${STORAGE_KEY_PREFIX}${docKey}`)
    return val !== null ? parseInt(val, 10) : 0
  } catch (e) {
    return 0
  }
}

/**
 * Save count to localStorage
 */
export function setLocalCount(docKey, count) {
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${docKey}`, String(count))
  } catch (e) {
    // ignore quota/storage errors
  }
}

/**
 * Fetch the current download count for a given document key
 * @param {string} docKey - e.g. 'doc_aisg', 'doc_connect'
 * @returns {Promise<number>}
 */
export async function fetchDocCount(docKey) {
  const cached = getLocalCount(docKey)
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(`${PRIMARY_API}/get/${NAMESPACE}/${docKey}`, {
      signal: controller.signal
    })
    clearTimeout(timeoutId)

    if (res.ok) {
      const data = await res.json()
      if (typeof data.value === 'number') {
        setLocalCount(docKey, data.value)
        return data.value
      }
    }
    return cached
  } catch (err) {
    console.warn(`[DocCounter] Failed to fetch count for ${docKey}, using cache:`, err)
    return cached
  }
}

/**
 * Increment the download count for a given document key
 * @param {string} docKey - e.g. 'doc_aisg', 'doc_connect'
 * @returns {Promise<number>} - New count
 */
export async function incrementDocCount(docKey) {
  const current = getLocalCount(docKey)
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    const res = await fetch(`${PRIMARY_API}/hit/${NAMESPACE}/${docKey}`, {
      signal: controller.signal
    })
    clearTimeout(timeoutId)

    if (res.ok) {
      const data = await res.json()
      if (typeof data.value === 'number') {
        setLocalCount(docKey, data.value)
        return data.value
      }
    }
  } catch (err) {
    console.warn(`[DocCounter] Failed to increment count for ${docKey} online, fallback to local:`, err)
  }

  // Fallback: Increment local count
  const newCount = current + 1
  setLocalCount(docKey, newCount)
  return newCount
}

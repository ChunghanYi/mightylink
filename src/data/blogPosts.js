// src/data/blogPosts.js

/**
 * MightyLink Lab. Tech Blog Links Registry
 * 
 * 앞으로 기술 블로그 글을 추가할 때는 아래 배열에 { title, url, date(선택), category(선택) } 형태로
 * 가볍게 추가하시면 되며, 항상 최신 날짜순(최신 글 먼저)으로 자동 정렬되어 표시됩니다.
 */

export const blogPosts = [
  {
    id: 'llm-inference-serving-engine',
    title: {
      ko: 'LLM Inference and Serving Engine 소개',
      en: 'Introduction to LLM Inference and Serving Engines'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2026/05/llm-inference-and-serving-engine.html',
    category: 'AI / LLM Serving',
    date: '2026.05',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'high-performance-web-server-appliance',
    title: {
      ko: 'High Performance Web Server Appliance 만들기',
      en: 'Building a High-Performance Web Server Appliance'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2025/11/high-performance-web-server-appliance.html',
    category: 'High-Performance / Web',
    date: '2025.11',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'high-performance-vpp-wireguard',
    title: {
      ko: 'FD.io VPP와 WireGuard를 연동한 고성능 WireGuard 게이트웨이 구축',
      en: 'Building High-Performance WireGuard Gateway with FD.io VPP'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2025/10/high-performance-vpp-wireguard.html',
    category: 'VPP / WireGuard',
    date: '2025.10',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'wireguard-android-analysis',
    title: {
      ko: 'WireGuard Android Application Analysis',
      en: 'WireGuard Android Application Analysis'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2025/09/wireguard-android-application-analysis.html',
    category: 'WireGuard / Android',
    date: '2025.09',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'wireguard-windows-analysis',
    title: {
      ko: 'Wireguard Windows Analysis',
      en: 'Wireguard Windows Analysis'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2025/08/wireguard-windows.html',
    category: 'WireGuard / Windows',
    date: '2025.08',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'ebpf-xdp-high-speed-network',
    title: {
      ko: 'eBPF & XDP 기반의 고속 네트워크 프로그래밍',
      en: 'High-Speed Network Programming with eBPF & XDP'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2025/04/ebpf-xdp-2.html',
    category: 'eBPF / XDP',
    date: '2025.04',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'dpdk-fdio-vpp-security-gateway',
    title: {
      ko: 'DPDK와 FD.io VPP로 고성능 Security Gateway 만들기',
      en: 'Building a High-Performance Security Gateway with DPDK & FD.io VPP'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2024/01/dpdk-fdio-vpp-security-gateway.html',
    category: 'DPDK / VPP',
    date: '2024.01',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'nanopi-r4s-pq-wireguard',
    title: {
      ko: 'NanoPi R4S로 PQ-Wireguard VPN Router 만들기',
      en: 'Building a Post-Quantum WireGuard VPN Router with NanoPi R4S'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2023/02/nanopi-r4s-pq-wireguard-vpn-router.html',
    category: 'PQC / WireGuard',
    date: '2023.02',
    source: 'slowbootkernelhacks.blogspot.com'
  },
  {
    id: 'dissecting-wireguard-vpn',
    title: {
      ko: 'WireGuard VPN 해부',
      en: 'Dissecting WireGuard VPN Architecture'
    },
    url: 'https://slowbootkernelhacks.blogspot.com/2020/09/wireguard-vpn.html',
    category: 'WireGuard / VPN',
    date: '2020.09',
    source: 'slowbootkernelhacks.blogspot.com'
  }
]

export function getAllPosts() {
  // 항상 최신 날짜순(내림차순)으로 자동 정렬
  return [...blogPosts].sort((a, b) => (b.date || '').localeCompare(a.date || ''))
}

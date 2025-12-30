'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Box,
  Download,
  LineChart,
  Package,
  Percent,
  ShoppingBag,
  Star,
  TrendingUp
} from 'lucide-react'
import Navigation from '@/components/Navigation'

type Order = {
  id: string
  date: string
  project: string
  feet: number
  status: 'In Production' | 'Shipped' | 'Delivered'
  total: string
}

export default function DealerDashboardPage() {
  const [selectedTab, setSelectedTab] = useState<'orders' | 'samples' | 'marketing'>('orders')

  const orders: Order[] = [
    {
      id: 'PO-1842',
      date: '2025-01-08',
      project: 'North Ridge Estates',
      feet: 620,
      status: 'In Production',
      total: '$18,600'
    },
    {
      id: 'PO-1837',
      date: '2025-01-02',
      project: 'Lakeside Villas',
      feet: 410,
      status: 'Shipped',
      total: '$12,300'
    },
    {
      id: 'PO-1829',
      date: '2024-12-15',
      project: 'Harbor Point',
      feet: 980,
      status: 'Delivered',
      total: '$29,400'
    }
  ]

  const totalFeet = orders.reduce((sum, o) => sum + o.feet, 0)
  const targetFeetForNextTier = 10000
  const progressToNextTier = Math.min(totalFeet / targetFeetForNextTier, 1)

  // DEMO VALUES
  const averageProjectSize = 145
  const averagePricePerFoot = 43
  const dealerName = 'Superior Fence Utah'

  return (
    <>
      <Navigation />

      <main
        style={{
          minHeight: '100vh',
          position: 'relative',
          padding: '96px 24px 48px',
          backgroundColor: '#020617'
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background:
              'radial-gradient(circle at top, rgba(248, 250, 252, 0.06), transparent 55%), radial-gradient(circle at bottom, rgba(15, 23, 42, 0.9), #020617)',
            zIndex: 0
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1120px',
            margin: '0 auto'
          }}
        >
          {/* Header */}
          <header
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '0.02em',
                  marginBottom: '6px'
                }}
              >
                Welcome back, {dealerName}
              </h1>
              <p
                style={{
                  color: 'rgba(226,232,240,0.75)',
                  fontSize: '15px'
                }}
              >
                Track footage, orders, and your path to better pricing in one place.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  padding: '8px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(148,163,184,0.4)',
                  color: 'rgba(226,232,240,0.8)',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Star size={14} color="#fbbf24" />
                <span>Current tier: Standard</span>
                <span
                  style={{
                    height: '4px',
                    width: '40px',
                    borderRadius: '999px',
                    background:
                      'linear-gradient(90deg, #f97316 ' +
                      progressToNextTier * 100 +
                      '%, rgba(148,163,184,0.4) ' +
                      progressToNextTier * 100 +
                      '%)'
                  }}
                />
              </div>
            </div>
          </header>

          {/* Top stats */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '24px'
            }}
          >
            {/* Total feet */}
            <div
              style={{
                background: 'rgba(15,23,42,0.95)',
                borderRadius: '16px',
                padding: '18px 18px 16px',
                border: '1px solid rgba(30,64,175,0.7)',
                boxShadow: '0 18px 40px rgba(15,23,42,0.8)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(148,163,184,0.9)'
                  }}
                >
                  Total feet purchased
                </span>
                <BarChart3 size={16} color="#38bdf8" />
              </div>
              <div
                style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '4px'
                }}
              >
                {totalFeet.toLocaleString()} ft
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(148,163,184,0.9)'
                }}
              >
                This year to date
              </div>
            </div>

            {/* Average project size */}
            <div
              style={{
                background: 'rgba(15,23,42,0.9)',
                borderRadius: '16px',
                padding: '18px 18px 16px',
                border: '1px solid rgba(55,65,81,0.9)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(148,163,184,0.9)'
                  }}
                >
                  Average project size
                </span>
                <LineChart size={16} color="#facc15" />
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '4px'
                }}
              >
                {averageProjectSize} ft
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(148,163,184,0.9)'
                }}
              >
                Based on recent orders
              </div>
            </div>

            {/* Average price per foot */}
            <div
              style={{
                background: 'rgba(15,23,42,0.9)',
                borderRadius: '16px',
                padding: '18px 18px 16px',
                border: '1px solid rgba(55,65,81,0.9)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(148,163,184,0.9)'
                  }}
                >
                  Avg price per foot
                </span>
                <Percent size={16} color="#f97316" />
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '4px'
                }}
              >
                ${averagePricePerFoot}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'rgba(148,163,184,0.9)'
                }}
              >
                Across all materials
              </div>
            </div>
          </section>

          {/* Actions row */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              gap: '16px',
              marginBottom: '24px'
            }}
          >
            {/* Primary actions */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px'
              }}
            >
              <button
                style={{
                  background:
                    'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(161,98,7,0.1))',
                  borderRadius: '14px',
                  border: '1px solid rgba(248, 250, 252, 0.08)',
                  padding: '14px 16px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '2px'
                    }}
                  >
                    Order material
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(209,213,219,0.8)'
                    }}
                  >
                    Build a new project order.
                  </div>
                </div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '999px',
                    background: 'rgba(248,250,252,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ShoppingBag size={16} />
                </div>
              </button>

              <button
                style={{
                  background: 'rgba(15,23,42,0.9)',
                  borderRadius: '14px',
                  border: '1px solid rgba(148,163,184,0.35)',
                  padding: '14px 16px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedTab('samples')}
              >
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '2px'
                    }}
                  >
                    Request samples
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(209,213,219,0.8)'
                    }}
                  >
                    Boards, colors, and hardware kits.
                  </div>
                </div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '999px',
                    background: 'rgba(15,23,42,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box size={16} />
                </div>
              </button>

              <button
                style={{
                  background: 'rgba(15,23,42,0.9)',
                  borderRadius: '14px',
                  border: '1px solid rgba(148,163,184,0.35)',
                  padding: '14px 16px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedTab('marketing')}
              >
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      marginBottom: '2px'
                    }}
                  >
                    Marketing & sales tools
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(209,213,219,0.8)'
                    }}
                  >
                    Download photos, spec sheets, and leave‑behinds.
                  </div>
                </div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '999px',
                    background: 'rgba(15,23,42,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Download size={16} />
                </div>
              </button>
            </div>

            {/* Pricing guidance / coaching */}
            <div
              style={{
                background: 'rgba(15,23,42,0.9)',
                borderRadius: '16px',
                padding: '16px 16px 14px',
                border: '1px solid rgba(55,65,81,0.9)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(148,163,184,0.9)'
                  }}
                >
                  Better pricing path
                </span>
                <TrendingUp size={16} color="#f97316" />
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: 'rgba(226,232,240,0.95)'
                }}
              >
                Add another{' '}
                <span style={{ color: '#facc15', fontWeight: 600 }}>
                  {(targetFeetForNextTier - totalFeet).toLocaleString()} ft
                </span>{' '}
                this quarter to unlock improved rates.
              </div>
              <button
                style={{
                  marginTop: '4px',
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  color: '#f97316',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer'
                }}
              >
                View volume recommendations
                <ArrowRight size={14} />
              </button>
            </div>
          </section>

          {/* Main content: Orders + Right rail */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 1.5fr)',
              gap: '20px'
            }}
          >
            {/* Left: table / tabbed content */}
            <div
              style={{
                background: 'rgba(15,23,42,0.95)',
                borderRadius: '18px',
                border: '1px solid rgba(30,64,175,0.5)',
                padding: '18px 18px 16px',
                boxShadow: '0 20px 40px rgba(15,23,42,0.85)'
              }}
            >
              {/* Tabs */}
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '16px'
                }}
              >
                {[
                  { id: 'orders', label: 'Orders', icon: LineChart },
                  { id: 'samples', label: 'Samples', icon: Box },
                  { id: 'marketing', label: 'Marketing', icon: Download }
                ].map((tab) => {
                  const Icon = tab.icon
                  const active = selectedTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id as any)}
                      style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 10px',
                        borderRadius: '999px',
                        border: active
                          ? '1px solid rgba(248,250,252,0.9)'
                          : '1px solid rgba(75,85,99,0.7)',
                        background: active
                          ? 'rgba(15,23,42,1)'
                          : 'rgba(15,23,42,0.7)',
                        color: active ? 'white' : 'rgba(209,213,219,0.85)',
                        fontSize: '13px',
                        cursor: 'pointer'
                      }}
                    >
                      <Icon size={14} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab content */}
              {selectedTab === 'orders' && (
                <div
                  style={{
                    overflowX: 'auto'
                  }}
                >
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: '13px',
                      color: 'rgba(226,232,240,0.95)'
                    }}
                  >
                    <thead>
                      <tr
                        style={{
                          textAlign: 'left',
                          color: 'rgba(148,163,184,0.9)',
                          fontSize: '12px'
                        }}
                      >
                        <th style={{ padding: '8px 6px' }}>PO</th>
                        <th style={{ padding: '8px 6px' }}>Date</th>
                        <th style={{ padding: '8px 6px' }}>Project</th>
                        <th style={{ padding: '8px 6px' }}>Feet</th>
                        <th style={{ padding: '8px 6px' }}>Status</th>
                        <th style={{ padding: '8px 6px', textAlign: 'right' }}>
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, idx) => (
                        <tr
                          key={order.id}
                          style={{
                            background:
                              idx % 2 === 0
                                ? 'rgba(15,23,42,0.9)'
                                : 'rgba(15,23,42,0.7)'
                          }}
                        >
                          <td style={{ padding: '10px 6px' }}>{order.id}</td>
                          <td style={{ padding: '10px 6px' }}>{order.date}</td>
                          <td style={{ padding: '10px 6px' }}>{order.project}</td>
                          <td style={{ padding: '10px 6px' }}>
                            {order.feet.toLocaleString()} ft
                          </td>
                          <td style={{ padding: '10px 6px' }}>
                            <span
                              style={{
                                padding: '3px 8px',
                                borderRadius: '999px',
                                fontSize: '11px',
                                background:
                                  order.status === 'Delivered'
                                    ? 'rgba(22,163,74,0.16)'
                                    : order.status === 'Shipped'
                                    ? 'rgba(59,130,246,0.16)'
                                    : 'rgba(251,191,36,0.16)',
                                color:
                                  order.status === 'Delivered'
                                    ? '#4ade80'
                                    : order.status === 'Shipped'
                                    ? '#60a5fa'
                                    : '#facc15'
                              }}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td
                            style={{
                              padding: '10px 6px',
                              textAlign: 'right'
                            }}
                          >
                            {order.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {selectedTab === 'samples' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '12px',
                    fontSize: '13px',
                    color: 'rgba(226,232,240,0.95)'
                  }}
                >
                  {[
                    {
                      title: 'Board color kit',
                      desc: 'All current colors in labeled sample boards.',
                      meta: 'Ships in 3–5 days'
                    },
                    {
                      title: 'Hardware sample set',
                      desc: 'Posts, brackets, and caps for in‑person demos.',
                      meta: 'Limit 1 per branch'
                    },
                    {
                      title: 'Homeowner binder',
                      desc: 'Printed brochure pack for closing meetings.',
                      meta: 'Includes pricing ranges (no dealer cost)'
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        background: 'rgba(15,23,42,0.9)',
                        borderRadius: '12px',
                        border: '1px solid rgba(55,65,81,0.9)',
                        padding: '12px 12px 10px'
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          color: 'rgba(148,163,184,0.95)',
                          marginBottom: '6px'
                        }}
                      >
                        {item.desc}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'rgba(148,163,184,0.9)'
                        }}
                      >
                        {item.meta}
                      </div>
                      <button
                        style={{
                          marginTop: '8px',
                          fontSize: '12px',
                          borderRadius: '999px',
                          padding: '4px 10px',
                          border: '1px solid rgba(248,250,252,0.7)',
                          background: 'transparent',
                          color: 'rgba(248,250,252,0.9)',
                          cursor: 'pointer'
                        }}
                      >
                        Add to sample request
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selectedTab === 'marketing' && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '12px',
                    fontSize: '13px',
                    color: 'rgba(226,232,240,0.95)'
                  }}
                >
                  {[
                    {
                      title: 'Project photography',
                      desc: 'High‑resolution install photos for your website.',
                      tag: 'JPG • Web‑safe'
                    },
                    {
                      title: 'Spec sheets',
                      desc: 'Technical PDFs for architects & builders.',
                      tag: 'PDF • Letter'
                    },
                    {
                      title: 'Homeowner one‑pager',
                      desc: 'Printable overview for kitchen‑table meetings.',
                      tag: 'PDF • Branded'
                    }
                  ].map((asset) => (
                    <div
                      key={asset.title}
                      style={{
                        background: 'rgba(15,23,42,0.9)',
                        borderRadius: '12px',
                        border: '1px solid rgba(55,65,81,0.9)',
                        padding: '12px 12px 10px'
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}
                      >
                        {asset.title}
                      </div>
                      <div
                        style={{
                          color: 'rgba(148,163,184,0.95)',
                          marginBottom: '6px'
                        }}
                      >
                        {asset.desc}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'rgba(148,163,184,0.9)',
                          marginBottom: '6px'
                        }}
                      >
                        {asset.tag}
                      </div>
                      <button
                        style={{
                          fontSize: '12px',
                          borderRadius: '999px',
                          padding: '4px 10px',
                          border: '1px solid rgba(248,250,252,0.7)',
                          background: 'transparent',
                          color: 'rgba(248,250,252,0.9)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Download size={12} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right rail: snapshot / health */}
            <aside
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div
                style={{
                  background: 'rgba(15,23,42,0.95)',
                  borderRadius: '16px',
                  border: '1px solid rgba(55,65,81,0.9)',
                  padding: '14px 14px 12px',
                  color: 'rgba(226,232,240,0.95)',
                  fontSize: '13px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '6px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 500
                    }}
                  >
                    Account snapshot
                  </span>
                  <BarChart3 size={16} color="#38bdf8" />
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: '6px',
                    color: 'rgba(148,163,184,0.95)'
                  }}
                >
                  <li>• Average project size: {averageProjectSize} ft</li>
                  <li>• Average price per ft: ${averagePricePerFoot}</li>
                  <li>• Most ordered: Horizontal privacy, black</li>
                </ul>
              </div>

              <div
                style={{
                  background:
                    'linear-gradient(145deg, rgba(249,115,22,0.16), rgba(0,0,0,0.9))',
                  borderRadius: '16px',
                  border: '1px solid rgba(248,250,252,0.2)',
                  padding: '14px 14px 12px',
                  color: 'rgba(255,255,255,0.95)',
                  fontSize: '13px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}
                >
                  <span
                    style={{
                      fontWeight: 500
                    }}
                  >
                    Close your next project faster
                  </span>
                  <LineChart size={16} color="#fed7aa" />
                </div>
                <p
                  style={{
                    margin: 0,
                    marginBottom: '8px',
                    color: 'rgba(255,247,237,0.9)'
                  }}
                >
                  Drop your homeowner a curated follow‑up: photos, spec sheet, and a simple yes/no quote.
                </p>
                <button
                  style={{
                    fontSize: '12px',
                    borderRadius: '999px',
                    padding: '5px 12px',
                    border: 'none',
                    background: 'rgba(15,23,42,0.95)',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Build follow‑up package
                  <ArrowRight size={14} />
                </button>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  )
}

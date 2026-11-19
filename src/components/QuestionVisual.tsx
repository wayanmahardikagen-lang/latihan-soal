import React from 'react';
import { Question, QuestionDiagramType } from '../types';

interface QuestionVisualProps {
  question: Question;
  compact?: boolean;
}

/**
 * Komponen Visual & Diagram Matematika untuk Soal Kelas III (Operasi Bilangan)
 * Mendukung gambar ilustrasi cerita dan diagram matematika presisi tinggi (SVG).
 */
export const QuestionVisual: React.FC<QuestionVisualProps> = ({
  question,
  compact = false,
}) => {
  if (!question.imageUrl && !question.diagramType) return null;

  return (
    <div
      className={`my-4 rounded-2xl border border-slate-200 bg-slate-50/80 overflow-hidden ${
        compact ? 'max-w-md' : 'max-w-xl mx-auto'
      }`}
    >
      {question.imageUrl ? (
        <div className="bg-white flex items-center justify-center p-2 sm:p-3">
          <img
            src={question.imageUrl}
            alt={question.imageCaption || `Ilustrasi Soal ${question.id}`}
            referrerPolicy="no-referrer"
            className={`w-full rounded-xl object-contain ${
              compact ? 'max-h-44' : 'max-h-64 sm:max-h-72'
            }`}
          />
        </div>
      ) : question.diagramType ? (
        <div className="bg-white p-3 sm:p-4 flex items-center justify-center">
          <MathSvgDiagram type={question.diagramType} />
        </div>
      ) : null}

      {question.imageCaption && (
        <div className="px-3.5 py-2 bg-slate-100/90 border-t border-slate-200 text-center">
          <p className="text-[11px] sm:text-xs font-semibold text-slate-600">
            {question.imageCaption}
          </p>
        </div>
      )}
    </div>
  );
};

const MathSvgDiagram: React.FC<{ type: QuestionDiagramType }> = ({ type }) => {
  switch (type) {
    case 'nilai_tempat_kubus':
      return (
        <svg
          viewBox="0 0 560 190"
          className="w-full h-auto max-h-56"
          role="img"
          aria-label="Diagram kubus nilai tempat: 3 ratusan, 4 puluhan, dan 6 satuan"
        >
          <rect x="0" y="0" width="560" height="190" rx="12" fill="#f8fafc" />

          {/* Bagian Ratusan (3 Lempeng 10x10) */}
          <g transform="translate(20, 18)">
            <rect x="0" y="0" width="235" height="130" rx="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
            {[0, 1, 2].map((idx) => (
              <g key={idx} transform={`translate(${14 + idx * 72}, 22)`}>
                <rect x="0" y="0" width="60" height="60" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" rx="3" />
                {[1, 2, 3, 4, 5].map((g) => (
                  <g key={g}>
                    <line x1={g * 10} y1="0" x2={g * 10} y2="60" stroke="#93c5fd" strokeWidth="0.7" />
                    <line x1="0" y1={g * 10} x2="60" y2={g * 10} stroke="#93c5fd" strokeWidth="0.7" />
                  </g>
                ))}
                <text x="30" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e40af">
                  100
                </text>
              </g>
            ))}
            <text x="117" y="118" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1e3a8a">
              3 Ratusan
            </text>
          </g>

          {/* Tanda + */}
          <text x="270" y="88" textAnchor="middle" fontSize="22" fontWeight="800" fill="#64748b">
            +
          </text>

          {/* Bagian Puluhan (4 Batang) */}
          <g transform="translate(286, 18)">
            <rect x="0" y="0" width="124" height="130" rx="10" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
            {[0, 1, 2, 3].map((idx) => (
              <g key={idx} transform={`translate(${18 + idx * 24}, 18)`}>
                <rect x="0" y="0" width="14" height="70" fill="#10b981" stroke="#047857" strokeWidth="1.3" rx="2" />
                {[1, 2, 3, 4, 5, 6].map((g) => (
                  <line key={g} x1="0" y1={g * 10} x2="14" y2={g * 10} stroke="#a7f3d0" strokeWidth="0.8" />
                ))}
              </g>
            ))}
            <text x="62" y="104" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#065f46">
              10 • 10 • 10 • 10
            </text>
            <text x="62" y="120" textAnchor="middle" fontSize="12" fontWeight="800" fill="#064e3b">
              4 Puluhan
            </text>
          </g>

          {/* Tanda + */}
          <text x="425" y="88" textAnchor="middle" fontSize="22" fontWeight="800" fill="#64748b">
            +
          </text>

          {/* Bagian Satuan (6 Kubus Kecil) */}
          <g transform="translate(440, 18)">
            <rect x="0" y="0" width="102" height="130" rx="10" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const col = idx % 3;
              const row = Math.floor(idx / 3);
              return (
                <rect
                  key={idx}
                  x={17 + col * 24}
                  y={28 + row * 24}
                  width="18"
                  height="18"
                  rx="3"
                  fill="#f59e0b"
                  stroke="#b45309"
                  strokeWidth="1.4"
                />
              );
            })}
            <text x="51" y="118" textAnchor="middle" fontSize="12" fontWeight="800" fill="#92400e">
              6 Satuan
            </text>
          </g>

          <text x="280" y="172" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#475569">
            Hitunglah jumlah total kubus nilai tempat di atas!
          </text>
        </svg>
      );

    case 'garis_bilangan_lompat':
      return (
        <svg
          viewBox="0 0 560 155"
          className="w-full h-auto max-h-48"
          role="img"
          aria-label="Garis bilangan dengan 4 lompatan masing-masing 6 satuan dari 0 hingga 24"
        >
          <rect x="0" y="0" width="560" height="155" rx="12" fill="#f8fafc" />

          {/* Garis utama */}
          <line x1="35" y1="105" x2="525" y2="105" stroke="#1e293b" strokeWidth="2.5" />
          <polygon points="525,99 538,105 525,111" fill="#1e293b" />

          {/* Titik-titik kelipatan 6: 0, 6, 12, 18, 24 */}
          {[0, 6, 12, 18, 24].map((val, idx) => {
            const cx = 55 + idx * 110;
            return (
              <g key={val}>
                <line x1={cx} y1="97" x2={cx} y2="113" stroke="#1e293b" strokeWidth="2.2" />
                <circle cx={cx} cy="105" r="4.5" fill={idx === 4 ? '#dc2626' : '#2563eb'} />
                <text
                  x={cx}
                  y="133"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="800"
                  fill={idx === 4 ? '#dc2626' : '#0f172a'}
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* 4 Busur Lompatan (+6) */}
          {[0, 1, 2, 3].map((idx) => {
            const x1 = 55 + idx * 110;
            const x2 = x1 + 110;
            const midX = (x1 + x2) / 2;
            return (
              <g key={idx}>
                <path
                  d={`M ${x1} 98 Q ${midX} 34 ${x2 - 4} 96`}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeDasharray="5,3"
                />
                <polygon points={`${x2 - 11},90 ${x2 - 2},98 ${x2 - 4},86`} fill="#2563eb" />
                <rect x={midX - 18} y="34" width="36" height="22" rx="6" fill="#dbeafe" stroke="#60a5fa" />
                <text x={midX} y="49" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1d4ed8">
                  +6
                </text>
              </g>
            );
          })}
        </svg>
      );

    case 'susunan_telur':
      return (
        <svg
          viewBox="0 0 520 205"
          className="w-full h-auto max-h-56"
          role="img"
          aria-label="Rak telur berisi 4 baris dan 6 kolom telur"
        >
          <rect x="0" y="0" width="520" height="205" rx="12" fill="#fffbeb" />
          {/* Wadah rak */}
          <rect x="78" y="22" width="364" height="154" rx="14" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />

          {/* Label Baris */}
          {[0, 1, 2, 3].map((row) => (
            <text
              key={`r-${row}`}
              x="44"
              y={53 + row * 34}
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="700"
              fill="#92400e"
            >
              Baris {row + 1}
            </text>
          ))}

          {/* 4 baris x 6 kolom telur */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4, 5].map((col) => {
              const cx = 112 + col * 58;
              const cy = 48 + row * 34;
              return (
                <g key={`${row}-${col}`}>
                  <ellipse cx={cx} cy={cy + 2} rx="19" ry="12" fill="#e5e7eb" />
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx="18"
                    ry="13"
                    fill="#f59e0b"
                    stroke="#b45309"
                    strokeWidth="1.5"
                  />
                  <ellipse cx={cx - 5} cy={cy - 4} rx="5" ry="3" fill="#fde68a" opacity="0.7" />
                </g>
              );
            })
          )}

          <text x="260" y="195" textAnchor="middle" fontSize="12" fontWeight="700" fill="#78350f">
            4 baris × 6 butir telur tiap baris
          </text>
        </svg>
      );

    case 'kantong_kelereng':
      return (
        <svg
          viewBox="0 0 560 185"
          className="w-full h-auto max-h-52"
          role="img"
          aria-label="32 butir kelereng dibagi sama banyak ke dalam 4 kotak"
        >
          <rect x="0" y="0" width="560" height="185" rx="12" fill="#f0f9ff" />
          <text x="280" y="26" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0369a1">
            Total 32 Butir Kelereng Dibagi Rata ke 4 Kotak
          </text>

          {[0, 1, 2, 3].map((boxIdx) => {
            const bx = 22 + boxIdx * 132;
            const colors = ['#2563eb', '#16a34a', '#ea580c', '#9333ea'];
            return (
              <g key={boxIdx} transform={`translate(${bx}, 42)`}>
                <rect x="0" y="0" width="118" height="106" rx="12" fill="#ffffff" stroke="#7dd3fc" strokeWidth="2" />
                <text x="59" y="20" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#0f172a">
                  Kotak {boxIdx + 1}
                </text>
                {/* 8 kelereng (2 baris x 4 kolom) */}
                {[0, 1].map((r) =>
                  [0, 1, 2, 3].map((c) => {
                    const cx = 23 + c * 24;
                    const cy = 46 + r * 30;
                    return (
                      <g key={`${r}-${c}`}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="9"
                          fill={colors[boxIdx]}
                          stroke="#0f172a"
                          strokeOpacity="0.2"
                          strokeWidth="1.2"
                        />
                        <circle cx={cx - 3} cy={cy - 3} r="2.5" fill="#ffffff" opacity="0.7" />
                      </g>
                    );
                  })
                )}
              </g>
            );
          })}

          <text x="280" y="170" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#334155">
            Setiap kotak memuat jumlah kelereng yang sama banyak (32 ÷ 4)
          </text>
        </svg>
      );

    case 'kartu_bilangan':
      return (
        <svg
          viewBox="0 0 520 155"
          className="w-full h-auto max-h-48"
          role="img"
          aria-label="Empat kartu angka bertuliskan 3, 5, 8, dan 2"
        >
          <rect x="0" y="0" width="520" height="155" rx="12" fill="#f8fafc" />
          <text x="260" y="24" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#334155">
            Empat Kartu Bilangan Acak
          </text>
          {[
            { digit: '3', bg: '#dbeafe', border: '#2563eb', text: '#1e3a8a' },
            { digit: '5', bg: '#dcfce7', border: '#16a34a', text: '#14532d' },
            { digit: '8', bg: '#fef3c7', border: '#d97706', text: '#78350f' },
            { digit: '2', bg: '#fce7f3', border: '#db2777', text: '#831843' },
          ].map((card, idx) => {
            const x = 58 + idx * 108;
            return (
              <g key={card.digit} transform={`translate(${x}, 38)`}>
                <rect x="3" y="4" width="80" height="94" rx="12" fill="#cbd5e1" opacity="0.5" />
                <rect
                  x="0"
                  y="0"
                  width="80"
                  height="94"
                  rx="12"
                  fill={card.bg}
                  stroke={card.border}
                  strokeWidth="2.5"
                />
                <text
                  x="40"
                  y="62"
                  textAnchor="middle"
                  fontSize="42"
                  fontWeight="900"
                  fill={card.text}
                >
                  {card.digit}
                </text>
              </g>
            );
          })}
        </svg>
      );

    case 'daftar_harga_kantin':
      return (
        <svg
          viewBox="0 0 540 190"
          className="w-full h-auto max-h-56"
          role="img"
          aria-label="Papan daftar harga Kantin Sekolah: Nasi Kuning Rp5.000, Susu Kotak Rp4.000, Roti Cokelat Rp3.000, Air Mineral Rp2.000"
        >
          <rect x="0" y="0" width="540" height="190" rx="14" fill="#1e293b" />
          <rect x="10" y="10" width="520" height="170" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <text x="270" y="38" textAnchor="middle" fontSize="14.5" fontWeight="900" fill="#fbbf24">
            DAFTAR HARGA KANTIN SD NEGERI 1 LOLOAN TIMUR
          </text>
          <line x1="36" y1="49" x2="504" y2="49" stroke="#334155" strokeWidth="1.5" />

          {[
            { name: 'Nasi Kuning', price: 'Rp5.000', x: 30, y: 66, accent: '#f59e0b' },
            { name: 'Susu Kotak', price: 'Rp4.000', x: 280, y: 66, accent: '#38bdf8' },
            { name: 'Roti Cokelat', price: 'Rp3.000', x: 30, y: 122, accent: '#fb7185' },
            { name: 'Air Mineral', price: 'Rp2.000', x: 280, y: 122, accent: '#34d399' },
          ].map((item) => (
            <g key={item.name} transform={`translate(${item.x}, ${item.y})`}>
              <rect x="0" y="0" width="230" height="44" rx="8" fill="#1e293b" stroke="#334155" />
              <circle cx="18" cy="22" r="6" fill={item.accent} />
              <text x="34" y="27" fontSize="13.5" fontWeight="700" fill="#f8fafc">
                {item.name}
              </text>
              <text x="216" y="27" textAnchor="end" fontSize="14" fontWeight="900" fill={item.accent}>
                {item.price}
              </text>
            </g>
          ))}
        </svg>
      );
  }
};

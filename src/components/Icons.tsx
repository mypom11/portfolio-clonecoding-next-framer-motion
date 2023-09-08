import React from 'react'

export const GithubIcon: React.FC<{ className?: string }> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
  )
}

export const LinkArrow: React.FC<{ className?: string }> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
      />
    </svg>
  )
}

export const RoudedText: React.FC<{ className?: string }> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="496"
      height="496"
      viewBox="0 0 496 496"
      xmlSpace="preserve"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M2391 4843 l-114 -4 7 -91 c3 -50 6 -142 6 -205 l0 -113 144 0 c79 0
151 3 160 6 10 4 16 18 16 41 l0 35 -112 -3 -113 -4 -3 46 -3 46 62 7 c34 3
77 6 95 6 32 0 34 2 34 37 l0 36 -95 -6 -95 -6 0 49 0 50 105 0 105 0 0 40 0
40 -42 -2 c-24 -1 -94 -4 -157 -5z"
        />
        <path
          d="M2720 4833 c0 -5 -15 -96 -33 -204 l-33 -197 35 -6 c58 -9 58 -9 66
49 7 58 9 60 64 49 27 -6 37 -17 63 -68 17 -33 31 -62 33 -63 5 -7 95 -20 95
-14 -1 3 -16 35 -34 71 l-34 65 37 20 c49 27 73 77 68 138 -7 86 -56 119 -215
148 -122 22 -112 21 -112 12z m149 -94 c34 -7 57 -19 71 -36 25 -33 25 -54 -1
-87 -22 -28 -48 -32 -123 -19 l-38 6 6 51 c10 70 17 96 27 96 4 0 31 -5 58
-11z"
        />
        <path
          d="M1903 4768 c-63 -15 -83 -24 -83 -36 1 -9 20 -98 43 -197 l43 -180
32 1 c60 3 62 6 46 66 -7 29 -14 54 -14 54 0 1 32 10 72 20 96 23 148 68 155
135 6 57 -24 122 -67 144 -39 20 -127 18 -227 -7z m168 -59 c26 -13 41 -53 33
-86 -7 -27 -64 -59 -119 -65 -29 -3 -30 -1 -46 62 -9 36 -13 68 -10 72 7 8 74
25 104 27 10 1 27 -4 38 -10z"
        />
        <path
          d="M1527 4636 c-100 -37 -167 -122 -167 -210 0 -43 29 -118 58 -149 48
-54 140 -75 220 -52 99 29 172 122 172 220 0 34 -32 110 -58 138 -47 53 -157
78 -225 53z m135 -97 c54 -39 70 -128 32 -186 -33 -52 -127 -71 -179 -37 -31
20 -65 83 -65 119 0 104 125 165 212 104z"
        />
        <path
          d="M3505 4628 c-10 -29 -105 -386 -105 -397 0 -6 18 -23 40 -37 l39 -26
113 90 c62 50 115 89 116 87 2 -2 -12 -62 -32 -135 -20 -72 -36 -135 -36 -139
0 -5 18 -20 41 -35 l40 -27 165 132 c91 72 163 136 162 141 -2 5 -17 17 -33
28 l-30 18 -105 -84 c-116 -94 -142 -112 -135 -92 8 22 75 272 75 280 0 15
-71 50 -83 40 -7 -5 -59 -46 -116 -91 -57 -45 -106 -80 -108 -77 -2 2 12 59
31 127 19 68 36 132 38 143 4 23 -70 75 -77 54z"
        />
        <path
          d="M3057 4432 c-20 -22 -22 -63 -5 -80 30 -30 98 -1 98 41 0 23 -35 57
-58 57 -11 0 -26 -8 -35 -18z"
        />
        <path
          d="M1028 4324 l-37 -26 121 -162 c67 -88 122 -163 124 -165 4 -4 243
172 243 179 0 3 -10 17 -22 32 l-22 27 -79 -60 c-44 -32 -83 -59 -87 -59 -4 0
-51 59 -104 130 -53 72 -98 130 -99 130 -1 0 -18 -12 -38 -26z"
        />
        <path
          d="M789 4099 l-104 -112 90 -84 c50 -46 118 -109 152 -139 l63 -56 73
78 c41 44 89 96 107 117 l33 38 -25 25 -25 25 -76 -81 c-49 -52 -81 -79 -89
-74 -21 12 -58 47 -58 55 0 5 28 38 62 74 l61 66 -24 25 -25 25 -66 -69 -67
-69 -30 24 c-17 14 -31 29 -31 35 0 5 31 44 70 86 l70 76 -22 23 c-12 13 -25
23 -28 23 -4 0 -54 -50 -111 -111z"
        />
        <path
          d="M3986 4046 c-81 -73 -147 -137 -146 -142 1 -5 47 -60 102 -122 l101
-113 23 22 c13 13 24 26 24 31 0 4 -32 42 -70 85 l-71 77 36 35 35 35 66 -73
67 -73 25 25 25 25 -63 72 -64 71 33 32 32 32 73 -79 73 -80 27 17 c14 10 26
21 26 26 0 6 -197 231 -203 231 -1 0 -69 -60 -151 -134z"
        />
        <path
          d="M601 3880 l-23 -41 90 -127 c61 -86 85 -128 76 -130 -8 -2 -75 6
-149 17 -74 12 -139 21 -144 21 -10 0 -51 -61 -51 -77 0 -5 91 -21 203 -37
111 -15 209 -29 217 -32 18 -5 64 71 54 89 -8 14 -234 339 -244 350 -3 4 -16
-11 -29 -33z"
        />
        <path
          d="M4251 3749 c-90 -54 -168 -102 -172 -106 -12 -12 115 -223 153 -255
71 -61 178 -15 178 76 0 23 2 25 26 16 36 -14 70 -3 100 33 39 47 30 92 -47
226 -35 61 -66 110 -69 110 -3 -1 -79 -45 -169 -100z m197 -79 c36 -64 36 -92
1 -110 -13 -7 -25 -7 -38 -1 -19 10 -81 103 -81 120 0 10 59 49 75 50 6 1 25
-26 43 -59z m-112 -147 c10 -35 0 -57 -28 -67 -22 -8 -32 -6 -48 9 -19 17 -80
115 -80 128 0 3 19 17 42 31 l43 25 32 -52 c18 -29 36 -62 39 -74z"
        />
        <path
          d="M310 3323 c-29 -79 -51 -145 -49 -147 7 -6 365 -136 375 -136 10 0
120 288 113 294 -2 2 -18 8 -34 13 l-31 10 -38 -103 c-21 -57 -42 -104 -47
-104 -5 0 -26 7 -48 16 l-38 15 32 87 c18 48 29 91 25 95 -4 4 -19 9 -34 10
-26 2 -29 -3 -57 -77 -16 -43 -31 -81 -33 -83 -6 -7 -86 19 -86 28 0 4 16 49
35 99 19 50 35 95 35 99 0 4 -15 12 -33 18 l-34 10 -53 -144z"
        />
        <path
          d="M4525 3192 c-104 -25 -192 -47 -194 -49 -2 -1 8 -55 23 -118 32 -134
64 -186 136 -223 36 -19 56 -22 97 -18 115 10 188 89 188 201 0 59 -42 256
-54 254 -3 -1 -91 -22 -196 -47z m163 -113 c16 -68 15 -104 -3 -139 -33 -63
-142 -85 -191 -39 -14 13 -31 33 -36 44 -14 25 -38 118 -33 124 5 4 221 58
241 60 6 1 16 -22 22 -50z"
        />
        <path
          d="M298 3010 c-43 -23 -81 -70 -97 -120 -11 -36 -42 -232 -38 -237 4 -3
401 -63 403 -60 1 1 10 55 19 120 20 134 13 187 -32 246 -52 68 -176 92 -255
51z m171 -97 c43 -32 53 -61 47 -136 -3 -37 -7 -71 -10 -75 -3 -5 -40 -3 -83
3 -43 7 -100 16 -126 20 l-49 6 7 52 c10 75 29 114 67 137 40 26 107 22 147
-7z"
        />
        <path
          d="M4593 2713 l-173 -3 0 -39 c0 -21 3 -93 7 -159 l6 -122 34 0 33 0 0
115 0 115 50 0 50 0 0 -95 0 -95 35 0 35 0 0 95 0 95 44 0 44 0 7 -108 7 -108
34 4 34 4 0 93 c0 50 -3 120 -6 154 -7 61 -7 61 -38 59 -17 -1 -109 -4 -203
-5z"
        />
        <path
          d="M338 2370 c-77 -23 -131 -85 -144 -167 -5 -33 16 -213 31 -259 2 -8
65 -1 200 22 109 18 199 35 202 37 8 8 -35 235 -50 264 -46 86 -148 130 -239
103z m129 -106 c34 -22 52 -54 65 -118 8 -44 8 -60 -1 -65 -15 -10 -241 -45
-247 -38 -3 2 -8 36 -11 74 -8 99 15 138 96 164 31 9 68 3 98 -17z"
        />
        <path
          d="M4615 2276 c-209 -52 -210 -52 -216 -81 -4 -17 -7 -37 -8 -46 -1 -11
62 -58 185 -139 102 -67 187 -120 189 -118 1 2 5 22 9 45 l6 41 -136 88 c-74
49 -130 90 -124 92 6 2 74 19 151 37 78 18 145 37 149 42 12 12 23 93 13 92
-4 -1 -102 -24 -218 -53z"
        />
        <path
          d="M465 1873 c-99 -41 -184 -78 -188 -82 -4 -5 0 -25 9 -45 20 -41 12
-42 147 14 50 21 93 37 95 35 4 -4 -88 -181 -128 -250 -17 -27 -17 -33 -3 -67
l14 -36 182 74 c100 41 185 78 190 83 4 4 0 24 -8 45 -18 42 -8 43 -145 -13
-52 -22 -96 -38 -98 -36 -2 2 30 66 72 144 l75 140 -14 35 c-9 20 -16 36 -18
35 -1 0 -83 -34 -182 -76z"
        />
        <path
          d="M4346 1941 c-9 -15 -106 -270 -106 -279 0 -11 49 -34 59 -27 5 2 26
50 47 105 30 80 41 99 53 94 9 -3 28 -11 44 -16 15 -5 27 -15 27 -22 0 -6 -13
-47 -30 -89 -16 -43 -30 -80 -30 -81 0 -6 60 -29 64 -25 2 2 16 38 31 79 16
41 32 79 37 84 6 8 88 -11 88 -20 0 -2 -18 -49 -39 -104 l-39 -101 25 -10 c13
-5 30 -9 36 -9 11 0 124 277 116 284 -4 3 -100 40 -316 122 -34 13 -65 20 -67
15z"
        />
        <path
          d="M4134 1489 c-42 -71 -75 -131 -73 -132 55 -39 56 -39 80 1 13 20 38
60 56 89 l33 52 140 -85 c77 -47 144 -83 150 -79 17 11 42 67 33 75 -4 4 -83
53 -175 108 l-166 101 -78 -130z"
        />
        <path
          d="M778 1542 l-27 -18 64 -94 65 -94 -42 -27 -42 -28 -53 80 -54 80 -29
-21 -30 -21 50 -74 c28 -41 50 -78 50 -84 0 -15 -71 -55 -79 -44 -3 6 -30 47
-60 91 l-53 82 -29 -21 c-16 -11 -29 -23 -29 -25 0 -3 39 -61 86 -130 l85
-124 165 111 c90 61 166 115 169 119 4 7 -161 253 -173 257 -4 2 -19 -5 -34
-15z"
        />
        <path
          d="M3994 1266 c-45 -20 -103 -74 -123 -115 -28 -55 -34 -97 -21 -150 40
-169 252 -217 372 -83 93 103 80 249 -30 326 -34 24 -55 31 -105 33 -38 2 -74
-2 -93 -11z m141 -96 c36 -22 65 -73 65 -115 0 -54 -45 -110 -102 -126 -77
-20 -168 50 -168 130 0 105 115 167 205 111z"
        />
        <path
          d="M881 1103 l-141 -147 27 -28 c15 -15 32 -28 39 -28 6 0 46 38 89 85
43 47 80 83 83 81 3 -3 -1 -76 -8 -162 l-12 -156 26 -26 26 -27 96 95 c52 52
118 121 145 152 l50 56 -36 28 -36 27 -84 -89 c-98 -104 -92 -112 -74 104 12
132 12 133 -11 157 -13 14 -27 25 -31 25 -4 0 -71 -66 -148 -147z"
        />
        <path
          d="M3686 987 l-29 -24 31 -45 31 -45 -59 -46 c-71 -56 -91 -84 -97 -140
-5 -47 19 -93 69 -130 34 -25 102 -26 149 -2 69 36 180 119 175 132 -12 29
-221 323 -231 323 -5 0 -23 -11 -39 -23z m119 -239 c19 -29 35 -56 35 -61 0
-15 -94 -67 -121 -67 -32 0 -69 41 -69 75 0 25 82 105 106 105 7 0 29 -24 49
-52z"
        />
        <path
          d="M1328 884 c-60 -18 -121 -86 -137 -151 -43 -167 155 -327 315 -254
76 35 123 109 124 194 0 142 -161 255 -302 211z m153 -97 c62 -42 78 -116 36
-178 -48 -71 -129 -87 -192 -37 -65 51 -67 134 -5 199 32 34 43 39 82 39 30 0
56 -7 79 -23z"
        />
        <path
          d="M3260 739 c-74 -32 -138 -60 -143 -61 -8 -3 14 -68 23 -68 4 0 48 18
99 40 50 22 96 40 101 40 9 0 40 -63 40 -80 0 -4 -38 -24 -85 -45 -47 -21 -85
-39 -85 -41 0 -15 26 -54 36 -54 7 0 48 16 90 35 42 19 78 34 78 33 13 -27 36
-80 36 -82 0 -2 -45 -23 -99 -46 l-100 -43 13 -31 c7 -17 20 -30 27 -28 22 5
253 103 263 112 7 7 -135 355 -152 371 -4 4 -68 -20 -142 -52z"
        />
        <path
          d="M1726 693 c8 -27 17 -63 21 -80 5 -28 3 -33 -14 -33 -27 0 -70 -35
-88 -70 -8 -16 -15 -50 -15 -75 0 -39 5 -52 38 -86 31 -33 55 -46 141 -74 58
-19 108 -35 112 -35 7 0 129 355 129 377 0 11 -50 33 -75 33 -7 0 -18 -21 -25
-46 -15 -54 -26 -60 -72 -41 -31 13 -37 22 -54 81 -18 64 -20 66 -63 81 -25 8
-46 15 -47 15 -2 0 4 -21 12 -47z m135 -201 l47 -17 -21 -67 c-11 -38 -25 -68
-32 -68 -6 0 -33 7 -58 16 -77 26 -100 82 -52 129 28 29 52 30 116 7z"
        />
        <path
          d="M3022 650 c-18 -4 -35 -9 -37 -12 -2 -2 0 -21 5 -43 16 -67 14 -72
-31 -79 -38 -6 -45 -4 -95 40 -50 42 -58 46 -92 39 -20 -4 -41 -9 -45 -12 -5
-3 17 -28 47 -55 l56 -49 -24 -32 c-31 -42 -39 -79 -26 -126 14 -52 49 -87
101 -101 38 -10 60 -9 154 10 61 13 113 24 116 26 3 2 -11 83 -32 181 -49 228
-48 223 -57 222 -4 -1 -22 -5 -40 -9z m7 -237 c28 -112 30 -108 -64 -119 -45
-6 -56 -3 -74 15 -26 26 -28 82 -3 104 18 16 73 35 109 36 18 1 24 -7 32 -36z"
        />
        <path
          d="M2295 528 c-4 -36 -10 -70 -14 -76 -4 -7 -32 -7 -94 1 -48 5 -89 8
-91 6 -2 -2 -6 -18 -9 -35 -6 -31 -6 -32 46 -38 138 -17 137 -17 137 -41 0
-12 -3 -37 -6 -55 l-7 -32 -66 6 c-36 4 -85 10 -107 13 -42 5 -42 5 -46 -31
-2 -20 -2 -36 2 -36 3 -1 70 -9 150 -20 80 -10 146 -17 148 -15 7 6 55 395 51
400 -3 2 -23 7 -46 11 l-41 6 -7 -64z"
        />
        <path
          d="M2604 565 c-32 -49 23 -104 75 -75 24 12 29 68 9 88 -21 21 -66 14
-84 -13z"
        />
      </g>
    </svg>
  )
}

export const SunIcon: React.FC<{ className?: string }> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
      >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
      </circle>
    </svg>
  )
}
export const MoonIcon: React.FC<{ className?: string }> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="2"
        strokeDashoffset="2"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.2s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="2;0"
          />
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s"
            dur="1.2s"
            values="2;0"
          />
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
      <g fill="currentColor">
        <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
        <set attributeName="opacity" begin="0.6s" to="0" />
      </g>
      <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="18" cy="6" r="12" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="12;3"
          />
        </circle>
        <circle cx="18" cy="6" r="10">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;1"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.6s" to="1" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;6"
        />
      </circle>
    </svg>
  )
}

const BLHELI_ESCS = {
  'layouts': {
    'BLHeli_S SiLabs': {
      '#A_L_00#': { 'name': 'A-L-0' },
      '#A_L_05#': { 'name': 'A-L-5' },
      '#A_L_10#': { 'name': 'A-L-10' },
      '#A_L_15#': { 'name': 'A-L-15' },
      '#A_L_20#': { 'name': 'A-L-20' },
      '#A_L_25#': { 'name': 'A-L-25' },
      '#A_L_30#': { 'name': 'A-L-30' },
      '#A_L_40#': { 'name': 'A-L-40' },
      '#A_L_50#': { 'name': 'A-L-50' },
      '#A_L_70#': { 'name': 'A-L-70' },
      '#A_L_90#': { 'name': 'A-L-90' },
      '#A_H_00#': { 'name': 'A-H-0' },
      '#A_H_05#': { 'name': 'A-H-5' },
      '#A_H_10#': { 'name': 'A-H-10' },
      '#A_H_15#': { 'name': 'A-H-15' },
      '#A_H_20#': { 'name': 'A-H-20' },
      '#A_H_25#': { 'name': 'A-H-25' },
      '#A_H_30#': { 'name': 'A-H-30' },
      '#A_H_40#': { 'name': 'A-H-40' },
      '#A_H_50#': { 'name': 'A-H-50' },
      '#A_H_70#': { 'name': 'A-H-70' },
      '#A_H_90#': { 'name': 'A-H-90' },
      '#B_L_00#': { 'name': 'B-L-0' },
      '#B_L_05#': { 'name': 'B-L-5' },
      '#B_L_10#': { 'name': 'B-L-10' },
      '#B_L_15#': { 'name': 'B-L-15' },
      '#B_L_20#': { 'name': 'B-L-20' },
      '#B_L_25#': { 'name': 'B-L-25' },
      '#B_L_30#': { 'name': 'B-L-30' },
      '#B_L_40#': { 'name': 'B-L-40' },
      '#B_L_50#': { 'name': 'B-L-50' },
      '#B_L_70#': { 'name': 'B-L-70' },
      '#B_L_90#': { 'name': 'B-L-90' },
      '#B_H_00#': { 'name': 'B-H-0' },
      '#B_H_05#': { 'name': 'B-H-5' },
      '#B_H_10#': { 'name': 'B-H-10' },
      '#B_H_15#': { 'name': 'B-H-15' },
      '#B_H_20#': { 'name': 'B-H-20' },
      '#B_H_25#': { 'name': 'B-H-25' },
      '#B_H_30#': { 'name': 'B-H-30' },
      '#B_H_40#': { 'name': 'B-H-40' },
      '#B_H_50#': { 'name': 'B-H-50' },
      '#B_H_70#': { 'name': 'B-H-70' },
      '#B_H_90#': { 'name': 'B-H-90' },
      '#C_L_00#': { 'name': 'C-L-0' },
      '#C_L_05#': { 'name': 'C-L-5' },
      '#C_L_10#': { 'name': 'C-L-10' },
      '#C_L_15#': { 'name': 'C-L-15' },
      '#C_L_20#': { 'name': 'C-L-20' },
      '#C_L_25#': { 'name': 'C-L-25' },
      '#C_L_30#': { 'name': 'C-L-30' },
      '#C_L_40#': { 'name': 'C-L-40' },
      '#C_L_50#': { 'name': 'C-L-50' },
      '#C_L_70#': { 'name': 'C-L-70' },
      '#C_L_90#': { 'name': 'C-L-90' },
      '#C_H_00#': { 'name': 'C-H-0' },
      '#C_H_05#': { 'name': 'C-H-5' },
      '#C_H_10#': { 'name': 'C-H-10' },
      '#C_H_15#': { 'name': 'C-H-15' },
      '#C_H_20#': { 'name': 'C-H-20' },
      '#C_H_25#': { 'name': 'C-H-25' },
      '#C_H_30#': { 'name': 'C-H-30' },
      '#C_H_40#': { 'name': 'C-H-40' },
      '#C_H_50#': { 'name': 'C-H-50' },
      '#C_H_70#': { 'name': 'C-H-70' },
      '#C_H_90#': { 'name': 'C-H-90' },
      '#D_L_00#': { 'name': 'D-L-0' },
      '#D_L_05#': { 'name': 'D-L-5' },
      '#D_L_10#': { 'name': 'D-L-10' },
      '#D_L_15#': { 'name': 'D-L-15' },
      '#D_L_20#': { 'name': 'D-L-20' },
      '#D_L_25#': { 'name': 'D-L-25' },
      '#D_L_30#': { 'name': 'D-L-30' },
      '#D_L_40#': { 'name': 'D-L-40' },
      '#D_L_50#': { 'name': 'D-L-50' },
      '#D_L_70#': { 'name': 'D-L-70' },
      '#D_L_90#': { 'name': 'D-L-90' },
      '#D_H_00#': { 'name': 'D-H-0' },
      '#D_H_05#': { 'name': 'D-H-5' },
      '#D_H_10#': { 'name': 'D-H-10' },
      '#D_H_15#': { 'name': 'D-H-15' },
      '#D_H_20#': { 'name': 'D-H-20' },
      '#D_H_25#': { 'name': 'D-H-25' },
      '#D_H_30#': { 'name': 'D-H-30' },
      '#D_H_40#': { 'name': 'D-H-40' },
      '#D_H_50#': { 'name': 'D-H-50' },
      '#D_H_70#': { 'name': 'D-H-70' },
      '#D_H_90#': { 'name': 'D-H-90' },
      '#E_L_00#': { 'name': 'E-L-0' },
      '#E_L_05#': { 'name': 'E-L-5' },
      '#E_L_10#': { 'name': 'E-L-10' },
      '#E_L_15#': { 'name': 'E-L-15' },
      '#E_L_20#': { 'name': 'E-L-20' },
      '#E_L_25#': { 'name': 'E-L-25' },
      '#E_L_30#': { 'name': 'E-L-30' },
      '#E_L_40#': { 'name': 'E-L-40' },
      '#E_L_50#': { 'name': 'E-L-50' },
      '#E_L_70#': { 'name': 'E-L-70' },
      '#E_L_90#': { 'name': 'E-L-90' },
      '#E_H_00#': { 'name': 'E-H-0' },
      '#E_H_05#': { 'name': 'E-H-5' },
      '#E_H_10#': { 'name': 'E-H-10' },
      '#E_H_15#': { 'name': 'E-H-15' },
      '#E_H_20#': { 'name': 'E-H-20' },
      '#E_H_25#': { 'name': 'E-H-25' },
      '#E_H_30#': { 'name': 'E-H-30' },
      '#E_H_40#': { 'name': 'E-H-40' },
      '#E_H_50#': { 'name': 'E-H-50' },
      '#E_H_70#': { 'name': 'E-H-70' },
      '#E_H_90#': { 'name': 'E-H-90' },
      '#F_L_00#': { 'name': 'F-L-0' },
      '#F_L_05#': { 'name': 'F-L-5' },
      '#F_L_10#': { 'name': 'F-L-10' },
      '#F_L_15#': { 'name': 'F-L-15' },
      '#F_L_20#': { 'name': 'F-L-20' },
      '#F_L_25#': { 'name': 'F-L-25' },
      '#F_L_30#': { 'name': 'F-L-30' },
      '#F_L_40#': { 'name': 'F-L-40' },
      '#F_L_50#': { 'name': 'F-L-50' },
      '#F_L_70#': { 'name': 'F-L-70' },
      '#F_L_90#': { 'name': 'F-L-90' },
      '#F_H_00#': { 'name': 'F-H-0' },
      '#F_H_05#': { 'name': 'F-H-5' },
      '#F_H_10#': { 'name': 'F-H-10' },
      '#F_H_15#': { 'name': 'F-H-15' },
      '#F_H_20#': { 'name': 'F-H-20' },
      '#F_H_25#': { 'name': 'F-H-25' },
      '#F_H_30#': { 'name': 'F-H-30' },
      '#F_H_40#': { 'name': 'F-H-40' },
      '#F_H_50#': { 'name': 'F-H-50' },
      '#F_H_70#': { 'name': 'F-H-70' },
      '#F_H_90#': { 'name': 'F-H-90' },
      '#G_L_00#': { 'name': 'G-L-0' },
      '#G_L_05#': { 'name': 'G-L-5' },
      '#G_L_10#': { 'name': 'G-L-10' },
      '#G_L_15#': { 'name': 'G-L-15' },
      '#G_L_20#': { 'name': 'G-L-20' },
      '#G_L_25#': { 'name': 'G-L-25' },
      '#G_L_30#': { 'name': 'G-L-30' },
      '#G_L_40#': { 'name': 'G-L-40' },
      '#G_L_50#': { 'name': 'G-L-50' },
      '#G_L_70#': { 'name': 'G-L-70' },
      '#G_L_90#': { 'name': 'G-L-90' },
      '#G_H_00#': { 'name': 'G-H-0' },
      '#G_H_05#': { 'name': 'G-H-5' },
      '#G_H_10#': { 'name': 'G-H-10' },
      '#G_H_15#': { 'name': 'G-H-15' },
      '#G_H_20#': { 'name': 'G-H-20' },
      '#G_H_25#': { 'name': 'G-H-25' },
      '#G_H_30#': { 'name': 'G-H-30' },
      '#G_H_40#': { 'name': 'G-H-40' },
      '#G_H_50#': { 'name': 'G-H-50' },
      '#G_H_70#': { 'name': 'G-H-70' },
      '#G_H_90#': { 'name': 'G-H-90' },
      '#H_L_00#': { 'name': 'H-L-0' },
      '#H_L_05#': { 'name': 'H-L-5' },
      '#H_L_10#': { 'name': 'H-L-10' },
      '#H_L_15#': { 'name': 'H-L-15' },
      '#H_L_20#': { 'name': 'H-L-20' },
      '#H_L_25#': { 'name': 'H-L-25' },
      '#H_L_30#': { 'name': 'H-L-30' },
      '#H_L_40#': { 'name': 'H-L-40' },
      '#H_L_50#': { 'name': 'H-L-50' },
      '#H_L_70#': { 'name': 'H-L-70' },
      '#H_L_90#': { 'name': 'H-L-90' },
      '#H_H_00#': { 'name': 'H-H-0' },
      '#H_H_05#': { 'name': 'H-H-5' },
      '#H_H_10#': { 'name': 'H-H-10' },
      '#H_H_15#': { 'name': 'H-H-15' },
      '#H_H_20#': { 'name': 'H-H-20' },
      '#H_H_25#': { 'name': 'H-H-25' },
      '#H_H_30#': { 'name': 'H-H-30' },
      '#H_H_40#': { 'name': 'H-H-40' },
      '#H_H_50#': { 'name': 'H-H-50' },
      '#H_H_70#': { 'name': 'H-H-70' },
      '#H_H_90#': { 'name': 'H-H-90' },
      '#I_L_00#': { 'name': 'I-L-0' },
      '#I_L_05#': { 'name': 'I-L-5' },
      '#I_L_10#': { 'name': 'I-L-10' },
      '#I_L_15#': { 'name': 'I-L-15' },
      '#I_L_20#': { 'name': 'I-L-20' },
      '#I_L_25#': { 'name': 'I-L-25' },
      '#I_L_30#': { 'name': 'I-L-30' },
      '#I_L_40#': { 'name': 'I-L-40' },
      '#I_L_50#': { 'name': 'I-L-50' },
      '#I_L_70#': { 'name': 'I-L-70' },
      '#I_L_90#': { 'name': 'I-L-90' },
      '#I_H_00#': { 'name': 'I-H-0' },
      '#I_H_05#': { 'name': 'I-H-5' },
      '#I_H_10#': { 'name': 'I-H-10' },
      '#I_H_15#': { 'name': 'I-H-15' },
      '#I_H_20#': { 'name': 'I-H-20' },
      '#I_H_25#': { 'name': 'I-H-25' },
      '#I_H_30#': { 'name': 'I-H-30' },
      '#I_H_40#': { 'name': 'I-H-40' },
      '#I_H_50#': { 'name': 'I-H-50' },
      '#I_H_70#': { 'name': 'I-H-70' },
      '#I_H_90#': { 'name': 'I-H-90' },
      '#J_L_00#': { 'name': 'J-L-0' },
      '#J_L_05#': { 'name': 'J-L-5' },
      '#J_L_10#': { 'name': 'J-L-10' },
      '#J_L_15#': { 'name': 'J-L-15' },
      '#J_L_20#': { 'name': 'J-L-20' },
      '#J_L_25#': { 'name': 'J-L-25' },
      '#J_L_30#': { 'name': 'J-L-30' },
      '#J_L_40#': { 'name': 'J-L-40' },
      '#J_L_50#': { 'name': 'J-L-50' },
      '#J_L_70#': { 'name': 'J-L-70' },
      '#J_L_90#': { 'name': 'J-L-90' },
      '#J_H_00#': { 'name': 'J-H-0' },
      '#J_H_05#': { 'name': 'J-H-5' },
      '#J_H_10#': { 'name': 'J-H-10' },
      '#J_H_15#': { 'name': 'J-H-15' },
      '#J_H_20#': { 'name': 'J-H-20' },
      '#J_H_25#': { 'name': 'J-H-25' },
      '#J_H_30#': { 'name': 'J-H-30' },
      '#J_H_40#': { 'name': 'J-H-40' },
      '#J_H_50#': { 'name': 'J-H-50' },
      '#J_H_70#': { 'name': 'J-H-70' },
      '#J_H_90#': { 'name': 'J-H-90' },
      '#K_L_00#': { 'name': 'K-L-0' },
      '#K_L_05#': { 'name': 'K-L-5' },
      '#K_L_10#': { 'name': 'K-L-10' },
      '#K_L_15#': { 'name': 'K-L-15' },
      '#K_L_20#': { 'name': 'K-L-20' },
      '#K_L_25#': { 'name': 'K-L-25' },
      '#K_L_30#': { 'name': 'K-L-30' },
      '#K_L_40#': { 'name': 'K-L-40' },
      '#K_L_50#': { 'name': 'K-L-50' },
      '#K_L_70#': { 'name': 'K-L-70' },
      '#K_L_90#': { 'name': 'K-L-90' },
      '#K_H_00#': { 'name': 'K-H-0' },
      '#K_H_05#': { 'name': 'K-H-5' },
      '#K_H_10#': { 'name': 'K-H-10' },
      '#K_H_15#': { 'name': 'K-H-15' },
      '#K_H_20#': { 'name': 'K-H-20' },
      '#K_H_25#': { 'name': 'K-H-25' },
      '#K_H_30#': { 'name': 'K-H-30' },
      '#K_H_40#': { 'name': 'K-H-40' },
      '#K_H_50#': { 'name': 'K-H-50' },
      '#K_H_70#': { 'name': 'K-H-70' },
      '#K_H_90#': { 'name': 'K-H-90' },
      '#L_L_00#': { 'name': 'L-L-0' },
      '#L_L_05#': { 'name': 'L-L-5' },
      '#L_L_10#': { 'name': 'L-L-10' },
      '#L_L_15#': { 'name': 'L-L-15' },
      '#L_L_20#': { 'name': 'L-L-20' },
      '#L_L_25#': { 'name': 'L-L-25' },
      '#L_L_30#': { 'name': 'L-L-30' },
      '#L_L_40#': { 'name': 'L-L-40' },
      '#L_L_50#': { 'name': 'L-L-50' },
      '#L_L_70#': { 'name': 'L-L-70' },
      '#L_L_90#': { 'name': 'L-L-90' },
      '#L_H_00#': { 'name': 'L-H-0' },
      '#L_H_05#': { 'name': 'L-H-5' },
      '#L_H_10#': { 'name': 'L-H-10' },
      '#L_H_15#': { 'name': 'L-H-15' },
      '#L_H_20#': { 'name': 'L-H-20' },
      '#L_H_25#': { 'name': 'L-H-25' },
      '#L_H_30#': { 'name': 'L-H-30' },
      '#L_H_40#': { 'name': 'L-H-40' },
      '#L_H_50#': { 'name': 'L-H-50' },
      '#L_H_70#': { 'name': 'L-H-70' },
      '#L_H_90#': { 'name': 'L-H-90' },
      '#M_L_00#': { 'name': 'M-L-0' },
      '#M_L_05#': { 'name': 'M-L-5' },
      '#M_L_10#': { 'name': 'M-L-10' },
      '#M_L_15#': { 'name': 'M-L-15' },
      '#M_L_20#': { 'name': 'M-L-20' },
      '#M_L_25#': { 'name': 'M-L-25' },
      '#M_L_30#': { 'name': 'M-L-30' },
      '#M_L_40#': { 'name': 'M-L-40' },
      '#M_L_50#': { 'name': 'M-L-50' },
      '#M_L_70#': { 'name': 'M-L-70' },
      '#M_L_90#': { 'name': 'M-L-90' },
      '#M_H_00#': { 'name': 'M-H-0' },
      '#M_H_05#': { 'name': 'M-H-5' },
      '#M_H_10#': { 'name': 'M-H-10' },
      '#M_H_15#': { 'name': 'M-H-15' },
      '#M_H_20#': { 'name': 'M-H-20' },
      '#M_H_25#': { 'name': 'M-H-25' },
      '#M_H_30#': { 'name': 'M-H-30' },
      '#M_H_40#': { 'name': 'M-H-40' },
      '#M_H_50#': { 'name': 'M-H-50' },
      '#M_H_70#': { 'name': 'M-H-70' },
      '#M_H_90#': { 'name': 'M-H-90' },
      '#N_L_00#': { 'name': 'N-L-0' },
      '#N_L_05#': { 'name': 'N-L-5' },
      '#N_L_10#': { 'name': 'N-L-10' },
      '#N_L_15#': { 'name': 'N-L-15' },
      '#N_L_20#': { 'name': 'N-L-20' },
      '#N_L_25#': { 'name': 'N-L-25' },
      '#N_L_30#': { 'name': 'N-L-30' },
      '#N_L_40#': { 'name': 'N-L-40' },
      '#N_L_50#': { 'name': 'N-L-50' },
      '#N_L_70#': { 'name': 'N-L-70' },
      '#N_L_90#': { 'name': 'N-L-90' },
      '#N_H_00#': { 'name': 'N-H-0' },
      '#N_H_05#': { 'name': 'N-H-5' },
      '#N_H_10#': { 'name': 'N-H-10' },
      '#N_H_15#': { 'name': 'N-H-15' },
      '#N_H_20#': { 'name': 'N-H-20' },
      '#N_H_25#': { 'name': 'N-H-25' },
      '#N_H_30#': { 'name': 'N-H-30' },
      '#N_H_40#': { 'name': 'N-H-40' },
      '#N_H_50#': { 'name': 'N-H-50' },
      '#N_H_70#': { 'name': 'N-H-70' },
      '#N_H_90#': { 'name': 'N-H-90' },
      '#O_L_00#': { 'name': 'O-L-0' },
      '#O_L_05#': { 'name': 'O-L-5' },
      '#O_L_10#': { 'name': 'O-L-10' },
      '#O_L_15#': { 'name': 'O-L-15' },
      '#O_L_20#': { 'name': 'O-L-20' },
      '#O_L_25#': { 'name': 'O-L-25' },
      '#O_L_30#': { 'name': 'O-L-30' },
      '#O_L_40#': { 'name': 'O-L-40' },
      '#O_L_50#': { 'name': 'O-L-50' },
      '#O_L_70#': { 'name': 'O-L-70' },
      '#O_L_90#': { 'name': 'O-L-90' },
      '#O_H_00#': { 'name': 'O-H-0' },
      '#O_H_05#': { 'name': 'O-H-5' },
      '#O_H_10#': { 'name': 'O-H-10' },
      '#O_H_15#': { 'name': 'O-H-15' },
      '#O_H_20#': { 'name': 'O-H-20' },
      '#O_H_25#': { 'name': 'O-H-25' },
      '#O_H_30#': { 'name': 'O-H-30' },
      '#O_H_40#': { 'name': 'O-H-40' },
      '#O_H_50#': { 'name': 'O-H-50' },
      '#O_H_70#': { 'name': 'O-H-70' },
      '#O_H_90#': { 'name': 'O-H-90' },
      '#P_L_00#': { 'name': 'P-L-0' },
      '#P_L_05#': { 'name': 'P-L-5' },
      '#P_L_10#': { 'name': 'P-L-10' },
      '#P_L_15#': { 'name': 'P-L-15' },
      '#P_L_20#': { 'name': 'P-L-20' },
      '#P_L_25#': { 'name': 'P-L-25' },
      '#P_L_30#': { 'name': 'P-L-30' },
      '#P_L_40#': { 'name': 'P-L-40' },
      '#P_L_50#': { 'name': 'P-L-50' },
      '#P_L_70#': { 'name': 'P-L-70' },
      '#P_L_90#': { 'name': 'P-L-90' },
      '#P_H_00#': { 'name': 'P-H-0' },
      '#P_H_05#': { 'name': 'P-H-5' },
      '#P_H_10#': { 'name': 'P-H-10' },
      '#P_H_15#': { 'name': 'P-H-15' },
      '#P_H_20#': { 'name': 'P-H-20' },
      '#P_H_25#': { 'name': 'P-H-25' },
      '#P_H_30#': { 'name': 'P-H-30' },
      '#P_H_40#': { 'name': 'P-H-40' },
      '#P_H_50#': { 'name': 'P-H-50' },
      '#P_H_70#': { 'name': 'P-H-70' },
      '#P_H_90#': { 'name': 'P-H-90' },
      '#Q_L_00#': { 'name': 'Q-L-0' },
      '#Q_L_05#': { 'name': 'Q-L-5' },
      '#Q_L_10#': { 'name': 'Q-L-10' },
      '#Q_L_15#': { 'name': 'Q-L-15' },
      '#Q_L_20#': { 'name': 'Q-L-20' },
      '#Q_L_25#': { 'name': 'Q-L-25' },
      '#Q_L_30#': { 'name': 'Q-L-30' },
      '#Q_L_40#': { 'name': 'Q-L-40' },
      '#Q_L_50#': { 'name': 'Q-L-50' },
      '#Q_L_70#': { 'name': 'Q-L-70' },
      '#Q_L_90#': { 'name': 'Q-L-90' },
      '#Q_H_00#': { 'name': 'Q-H-0' },
      '#Q_H_05#': { 'name': 'Q-H-5' },
      '#Q_H_10#': { 'name': 'Q-H-10' },
      '#Q_H_15#': { 'name': 'Q-H-15' },
      '#Q_H_20#': { 'name': 'Q-H-20' },
      '#Q_H_25#': { 'name': 'Q-H-25' },
      '#Q_H_30#': { 'name': 'Q-H-30' },
      '#Q_H_40#': { 'name': 'Q-H-40' },
      '#Q_H_50#': { 'name': 'Q-H-50' },
      '#Q_H_70#': { 'name': 'Q-H-70' },
      '#Q_H_90#': { 'name': 'Q-H-90' },
      '#R_L_00#': { 'name': 'R-L-0' },
      '#R_L_05#': { 'name': 'R-L-5' },
      '#R_L_10#': { 'name': 'R-L-10' },
      '#R_L_15#': { 'name': 'R-L-15' },
      '#R_L_20#': { 'name': 'R-L-20' },
      '#R_L_25#': { 'name': 'R-L-25' },
      '#R_L_30#': { 'name': 'R-L-30' },
      '#R_L_40#': { 'name': 'R-L-40' },
      '#R_L_50#': { 'name': 'R-L-50' },
      '#R_L_70#': { 'name': 'R-L-70' },
      '#R_L_90#': { 'name': 'R-L-90' },
      '#R_H_00#': { 'name': 'R-H-0' },
      '#R_H_05#': { 'name': 'R-H-5' },
      '#R_H_10#': { 'name': 'R-H-10' },
      '#R_H_15#': { 'name': 'R-H-15' },
      '#R_H_20#': { 'name': 'R-H-20' },
      '#R_H_25#': { 'name': 'R-H-25' },
      '#R_H_30#': { 'name': 'R-H-30' },
      '#R_H_40#': { 'name': 'R-H-40' },
      '#R_H_50#': { 'name': 'R-H-50' },
      '#R_H_70#': { 'name': 'R-H-70' },
      '#R_H_90#': { 'name': 'R-H-90' },
      '#S_L_00#': { 'name': 'S-L-0' },
      '#S_L_05#': { 'name': 'S-L-5' },
      '#S_L_10#': { 'name': 'S-L-10' },
      '#S_L_15#': { 'name': 'S-L-15' },
      '#S_L_20#': { 'name': 'S-L-20' },
      '#S_L_25#': { 'name': 'S-L-25' },
      '#S_L_30#': { 'name': 'S-L-30' },
      '#S_L_40#': { 'name': 'S-L-40' },
      '#S_L_50#': { 'name': 'S-L-50' },
      '#S_L_70#': { 'name': 'S-L-70' },
      '#S_L_90#': { 'name': 'S-L-90' },
      '#S_H_00#': { 'name': 'S-H-0' },
      '#S_H_05#': { 'name': 'S-H-5' },
      '#S_H_10#': { 'name': 'S-H-10' },
      '#S_H_15#': { 'name': 'S-H-15' },
      '#S_H_20#': { 'name': 'S-H-20' },
      '#S_H_25#': { 'name': 'S-H-25' },
      '#S_H_30#': { 'name': 'S-H-30' },
      '#S_H_40#': { 'name': 'S-H-40' },
      '#S_H_50#': { 'name': 'S-H-50' },
      '#S_H_70#': { 'name': 'S-H-70' },
      '#S_H_90#': { 'name': 'S-H-90' },
      '#T_L_00#': { 'name': 'T-L-0' },
      '#T_L_05#': { 'name': 'T-L-5' },
      '#T_L_10#': { 'name': 'T-L-10' },
      '#T_L_15#': { 'name': 'T-L-15' },
      '#T_L_20#': { 'name': 'T-L-20' },
      '#T_L_25#': { 'name': 'T-L-25' },
      '#T_L_30#': { 'name': 'T-L-30' },
      '#T_L_40#': { 'name': 'T-L-40' },
      '#T_L_50#': { 'name': 'T-L-50' },
      '#T_L_70#': { 'name': 'T-L-70' },
      '#T_L_90#': { 'name': 'T-L-90' },
      '#T_H_00#': { 'name': 'T-H-0' },
      '#T_H_05#': { 'name': 'T-H-5' },
      '#T_H_10#': { 'name': 'T-H-10' },
      '#T_H_15#': { 'name': 'T-H-15' },
      '#T_H_20#': { 'name': 'T-H-20' },
      '#T_H_25#': { 'name': 'T-H-25' },
      '#T_H_30#': { 'name': 'T-H-30' },
      '#T_H_40#': { 'name': 'T-H-40' },
      '#T_H_50#': { 'name': 'T-H-50' },
      '#T_H_70#': { 'name': 'T-H-70' },
      '#T_H_90#': { 'name': 'T-H-90' },
      '#U_L_00#': { 'name': 'U-L-0' },
      '#U_L_05#': { 'name': 'U-L-5' },
      '#U_L_10#': { 'name': 'U-L-10' },
      '#U_L_15#': { 'name': 'U-L-15' },
      '#U_L_20#': { 'name': 'U-L-20' },
      '#U_L_25#': { 'name': 'U-L-25' },
      '#U_L_30#': { 'name': 'U-L-30' },
      '#U_L_40#': { 'name': 'U-L-40' },
      '#U_L_50#': { 'name': 'U-L-50' },
      '#U_L_70#': { 'name': 'U-L-70' },
      '#U_L_90#': { 'name': 'U-L-90' },
      '#U_H_00#': { 'name': 'U-H-0' },
      '#U_H_05#': { 'name': 'U-H-5' },
      '#U_H_10#': { 'name': 'U-H-10' },
      '#U_H_15#': { 'name': 'U-H-15' },
      '#U_H_20#': { 'name': 'U-H-20' },
      '#U_H_25#': { 'name': 'U-H-25' },
      '#U_H_30#': { 'name': 'U-H-30' },
      '#U_H_40#': { 'name': 'U-H-40' },
      '#U_H_50#': { 'name': 'U-H-50' },
      '#U_H_70#': { 'name': 'U-H-70' },
      '#U_H_90#': { 'name': 'U-H-90' },
      '#V_L_00#': { 'name': 'V-L-0' },
      '#V_L_05#': { 'name': 'V-L-5' },
      '#V_L_10#': { 'name': 'V-L-10' },
      '#V_L_15#': { 'name': 'V-L-15' },
      '#V_L_20#': { 'name': 'V-L-20' },
      '#V_L_25#': { 'name': 'V-L-25' },
      '#V_L_30#': { 'name': 'V-L-30' },
      '#V_L_40#': { 'name': 'V-L-40' },
      '#V_L_50#': { 'name': 'V-L-50' },
      '#V_L_70#': { 'name': 'V-L-70' },
      '#V_L_90#': { 'name': 'V-L-90' },
      '#V_H_00#': { 'name': 'V-H-0' },
      '#V_H_05#': { 'name': 'V-H-5' },
      '#V_H_10#': { 'name': 'V-H-10' },
      '#V_H_15#': { 'name': 'V-H-15' },
      '#V_H_20#': { 'name': 'V-H-20' },
      '#V_H_25#': { 'name': 'V-H-25' },
      '#V_H_30#': { 'name': 'V-H-30' },
      '#V_H_40#': { 'name': 'V-H-40' },
      '#V_H_50#': { 'name': 'V-H-50' },
      '#V_H_70#': { 'name': 'V-H-70' },
      '#V_H_90#': { 'name': 'V-H-90' },
      '#W_L_00#': { 'name': 'W-L-0' },
      '#W_L_05#': { 'name': 'W-L-5' },
      '#W_L_10#': { 'name': 'W-L-10' },
      '#W_L_15#': { 'name': 'W-L-15' },
      '#W_L_20#': { 'name': 'W-L-20' },
      '#W_L_25#': { 'name': 'W-L-25' },
      '#W_L_30#': { 'name': 'W-L-30' },
      '#W_L_40#': { 'name': 'W-L-40' },
      '#W_L_50#': { 'name': 'W-L-50' },
      '#W_L_70#': { 'name': 'W-L-70' },
      '#W_L_90#': { 'name': 'W-L-90' },
      '#W_H_00#': { 'name': 'W-H-0' },
      '#W_H_05#': { 'name': 'W-H-5' },
      '#W_H_10#': { 'name': 'W-H-10' },
      '#W_H_15#': { 'name': 'W-H-15' },
      '#W_H_20#': { 'name': 'W-H-20' },
      '#W_H_25#': { 'name': 'W-H-25' },
      '#W_H_30#': { 'name': 'W-H-30' },
      '#W_H_40#': { 'name': 'W-H-40' },
      '#W_H_50#': { 'name': 'W-H-50' },
      '#W_H_70#': { 'name': 'W-H-70' },
      '#W_H_90#': { 'name': 'W-H-90' },
      '#X_L_00#': { 'name': 'X-L-0' },
      '#X_L_05#': { 'name': 'X-L-5' },
      '#X_L_10#': { 'name': 'X-L-10' },
      '#X_L_15#': { 'name': 'X-L-15' },
      '#X_L_20#': { 'name': 'X-L-20' },
      '#X_L_25#': { 'name': 'X-L-25' },
      '#X_L_30#': { 'name': 'X-L-30' },
      '#X_L_40#': { 'name': 'X-L-40' },
      '#X_L_50#': { 'name': 'X-L-50' },
      '#X_L_70#': { 'name': 'X-L-70' },
      '#X_L_90#': { 'name': 'X-L-90' },
      '#X_H_00#': { 'name': 'X-H-0' },
      '#X_H_05#': { 'name': 'X-H-5' },
      '#X_H_10#': { 'name': 'X-H-10' },
      '#X_H_15#': { 'name': 'X-H-15' },
      '#X_H_20#': { 'name': 'X-H-20' },
      '#X_H_25#': { 'name': 'X-H-25' },
      '#X_H_30#': { 'name': 'X-H-30' },
      '#X_H_40#': { 'name': 'X-H-40' },
      '#X_H_50#': { 'name': 'X-H-50' },
      '#X_H_70#': { 'name': 'X-H-70' },
      '#X_H_90#': { 'name': 'X-H-90' },
      '#Y_L_00#': { 'name': 'Y-L-0' },
      '#Y_L_05#': { 'name': 'Y-L-5' },
      '#Y_L_10#': { 'name': 'Y-L-10' },
      '#Y_L_15#': { 'name': 'Y-L-15' },
      '#Y_L_20#': { 'name': 'Y-L-20' },
      '#Y_L_25#': { 'name': 'Y-L-25' },
      '#Y_L_30#': { 'name': 'Y-L-30' },
      '#Y_L_40#': { 'name': 'Y-L-40' },
      '#Y_L_50#': { 'name': 'Y-L-50' },
      '#Y_L_70#': { 'name': 'Y-L-70' },
      '#Y_L_90#': { 'name': 'Y-L-90' },
      '#Y_H_00#': { 'name': 'Y-H-0' },
      '#Y_H_05#': { 'name': 'Y-H-5' },
      '#Y_H_10#': { 'name': 'Y-H-10' },
      '#Y_H_15#': { 'name': 'Y-H-15' },
      '#Y_H_20#': { 'name': 'Y-H-20' },
      '#Y_H_25#': { 'name': 'Y-H-25' },
      '#Y_H_30#': { 'name': 'Y-H-30' },
      '#Y_H_40#': { 'name': 'Y-H-40' },
      '#Y_H_50#': { 'name': 'Y-H-50' },
      '#Y_H_70#': { 'name': 'Y-H-70' },
      '#Y_H_90#': { 'name': 'Y-H-90' },
      '#Z_L_00#': { 'name': 'Z-L-0' },
      '#Z_L_05#': { 'name': 'Z-L-5' },
      '#Z_L_10#': { 'name': 'Z-L-10' },
      '#Z_L_15#': { 'name': 'Z-L-15' },
      '#Z_L_20#': { 'name': 'Z-L-20' },
      '#Z_L_25#': { 'name': 'Z-L-25' },
      '#Z_L_30#': { 'name': 'Z-L-30' },
      '#Z_L_40#': { 'name': 'Z-L-40' },
      '#Z_L_50#': { 'name': 'Z-L-50' },
      '#Z_L_70#': { 'name': 'Z-L-70' },
      '#Z_L_90#': { 'name': 'Z-L-90' },
      '#Z_H_00#': { 'name': 'Z-H-0' },
      '#Z_H_05#': { 'name': 'Z-H-5' },
      '#Z_H_10#': { 'name': 'Z-H-10' },
      '#Z_H_15#': { 'name': 'Z-H-15' },
      '#Z_H_20#': { 'name': 'Z-H-20' },
      '#Z_H_25#': { 'name': 'Z-H-25' },
      '#Z_H_30#': { 'name': 'Z-H-30' },
      '#Z_H_40#': { 'name': 'Z-H-40' },
      '#Z_H_50#': { 'name': 'Z-H-50' },
      '#Z_H_70#': { 'name': 'Z-H-70' },
      '#Z_H_90#': { 'name': 'Z-H-90' },
    },
    'SiLabs': {
      '#AIK_BL_30S#': {
        'name': 'AIKON Boltlite 30A',
        'damped_enabled': 1,
      },
      '#MR25_15A#': {
        'name': 'Align MR25 15A',
        'damped_enabled': 1,
      },
      '#AlignBL15P#': {
        'name': 'Align RCE BL15P',
        'damped_enabled': 0,
      },
      '#AlignBL15X#': {
        'name': 'Align RCE BL15X',
        'damped_enabled': 0,
      },
      '#AlignBL35P#': {
        'name': 'Align RCE BL35P',
        'damped_enabled': 1,
      },
      '#AlignBL35X#': {
        'name': 'Align RCE BL35X',
        'damped_enabled': 1,
      },
      '#DALRC_XR20A#': {
        'name': 'DALRC XR20A',
        'damped_enabled': 1,
      },
      '#DP3A#': {
        'name': 'DP 3A',
        'damped_enabled': 1,
      },
      '#DYS_XM20A#': {
        'name': 'DYS XM20A',
        'damped_enabled': 1,
      },
      '#EAZY3Av2#': {
        'name': 'EAZY 3Av2',
        'damped_enabled': 1,
      },
      '#EMAX20A#': {
        'name': 'EMAX 20A',
        'damped_enabled': 1,
      },
      '#EMAX40A#': {
        'name': 'EMAX 40A',
        'damped_enabled': 1,
      },
      '#EMAX_Ltng_20A#': {
        'name': 'EMAX Lightning 20A',
        'damped_enabled': 1,
      },
      '#EMAXNano20A#': {
        'name': 'EMAX Nano 20A',
        'damped_enabled': 1,
      },
      '#F85_3A#': {
        'name': 'F85 3A',
        'damped_enabled': 1,
      },
      '#FC_Fairy_30A#': {
        'name': 'Flycolor Fairy 30A',
        'damped_enabled': 1,
      },
      '#FC_Fairy_6A#': {
        'name': 'Flycolor Fairy 6A',
        'damped_enabled': 0,
      },
      '#FC_FairyV2_30A#': {
        'name': 'Flycolor Fairy V2 30A',
        'damped_enabled': 1,
      },
      '#FC_Raptor_20A#': {
        'name': 'Flycolor Raptor 20A',
        'damped_enabled': 1,
      },
      '#FC_Rapt390_20A#': {
        'name': 'Flycolor Raptor 390 20A',
        'damped_enabled': 1,
      },
      '#FVTLibee12A#': {
        'name': 'FVT Littlebee 12A',
        'damped_enabled': 1,
      },
      '#FVTLibee20A#': {
        'name': 'FVT Littlebee 20A',
        'damped_enabled': 1,
      },
      '#FVTLibee20APro#': {
        'name': 'FVT Littlebee 20A Pro',
        'damped_enabled': 1,
      },
      '#FVTLibee30A#': {
        'name': 'FVT Littlebee 30A',
        'damped_enabled': 1,
      },
      '#GauiGE18318A#': {
        'name': 'Gaui GE 183 18A',
        'damped_enabled': 0,
      },
      '#G_Ultra20A#': {
        'name': 'Graupner Ultra 20A',
        'damped_enabled': 1,
      },
      '#HiModelCool22A#': {
        'name': 'HiModel Cool 22A',
        'damped_enabled': 0,
      },
      '#HiModelCool33A#': {
        'name': 'HiModel Cool 33A',
        'damped_enabled': 0,
      },
      '#HiModelCool41A#': {
        'name': 'HiModel Cool 41A',
        'damped_enabled': 0,
      },
      '#HKing10A#': {
        'name': 'H King 10A',
        'damped_enabled': 1,
      },
      '#HKing20A#': {
        'name': 'H King 20A',
        'damped_enabled': 1,
      },
      '#HKing35A#': {
        'name': 'H King 35A',
        'damped_enabled': 1,
      },
      '#HKing50A#': {
        'name': 'H King 50A',
        'damped_enabled': 1,
      },
      '#MDRX62H#': {
        'name': 'MDRX62H',
        'damped_enabled': 0,
      },
      '#OvskyMR20APro#': {
        'name': 'Oversky MR 20A Pro',
        'damped_enabled': 1,
      },
      '#Platinum50Av3#': {
        'name': 'Platinum 50Av3',
        'damped_enabled': 1,
      },
      '#Platinum150A#': {
        'name': 'Platinum Pro 150A',
        'damped_enabled': 1,
      },
      '#PlatinumPro30A#': {
        'name': 'Platinum Pro 30A',
        'damped_enabled': 1,
      },
      '#PolarisTdr100A#': {
        'name': 'Polaris Thunder 100A',
        'damped_enabled': 0,
      },
      '#PolarisTdr12A#': {
        'name': 'Polaris Thunder 12A',
        'damped_enabled': 0,
      },
      '#PolarisTdr20A#': {
        'name': 'Polaris Thunder 20A',
        'damped_enabled': 0,
      },
      '#PolarisTdr30A#': {
        'name': 'Polaris Thunder 30A',
        'damped_enabled': 0,
      },
      '#PolarisTdr40A#': {
        'name': 'Polaris Thunder 40A',
        'damped_enabled': 0,
      },
      '#PolarisTdr60A#': {
        'name': 'Polaris Thunder 60A',
        'damped_enabled': 0,
      },
      '#PolarisTdr80A#': {
        'name': 'Polaris Thunder 80A',
        'damped_enabled': 0,
      },
      '#RCTimer6A#': {
        'name': 'RCTimer 6A',
        'damped_enabled': 0,
      },
      '#RotorGeeks20A#': {
        'name': 'RotorGeeks 20A',
        'damped_enabled': 1,
      },
      '#RotorGeeks20AP#': {
        'name': 'RotorGeeks 20A Plus',
        'damped_enabled': 1,
      },
      '#SKMonster30A#': {
        'name': 'Servoking Monster 30A',
        'damped_enabled': 1,
      },
      '#SkyIII30A#': {
        'name': 'SkyIII 30A',
        'damped_enabled': 0,
      },
      '#Skywalker20A#': {
        'name': 'Skywalker 20A',
        'damped_enabled': 1,
      },
      '#Skywalker40A#': {
        'name': 'Skywalker 40A',
        'damped_enabled': 1,
      },
      '#Supermicro3p5A#': {
        'name': 'Supermicro 3p5A',
        'damped_enabled': 1,
      },
      '#Tarot30A#': {
        'name': 'Tarot 30A',
        'damped_enabled': 0,
      },
      '#TBSCube12A#': {
        'name': 'TBS Cube 12A',
        'damped_enabled': 1,
      },
      '#TurnigyAE20A#': {
        'name': 'Turnigy AE 20A',
        'damped_enabled': 0,
      },
      '#TurnigyAE25A#': {
        'name': 'Turnigy AE 25A',
        'damped_enabled': 0,
      },
      '#TurnigyAE30A#': {
        'name': 'Turnigy AE 30A',
        'damped_enabled': 0,
      },
      '#TurnigyAE45A#': {
        'name': 'Turnigy AE 45A',
        'damped_enabled': 1,
      },
      '#TgyKF120AHV#': {
        'name': 'Turnigy KForce 120A HV',
        'damped_enabled': 0,
      },
      '#TgyKF120AHVv2#': {
        'name': 'Turnigy KForce 120A HV v2',
        'damped_enabled': 0,
      },
      '#TgyKF40A#': {
        'name': 'Turnigy KForce 40A',
        'damped_enabled': 1,
      },
      '#TgyKF70AHV#': {
        'name': 'Turnigy KForce 70A HV',
        'damped_enabled': 0,
      },
      '#Turnigy10A#': {
        'name': 'Turnigy Plush 10A',
        'damped_enabled': 0,
      },
      '#Turnigy12A#': {
        'name': 'Turnigy Plush 12A',
        'damped_enabled': 0,
      },
      '#Turnigy18A#': {
        'name': 'Turnigy Plush 18A',
        'damped_enabled': 0,
      },
      '#Turnigy25A#': {
        'name': 'Turnigy Plush 25A',
        'damped_enabled': 0,
      },
      '#Turnigy30A#': {
        'name': 'Turnigy Plush 30A',
        'damped_enabled': 0,
      },
      '#Turnigy40A#': {
        'name': 'Turnigy Plush 40A',
        'damped_enabled': 1,
      },
      '#Turnigy60A#': {
        'name': 'Turnigy Plush 60A',
        'damped_enabled': 0,
      },
      '#Turnigy6A#': {
        'name': 'Turnigy Plush 6A',
        'damped_enabled': 0,
      },
      '#Turnigy80A#': {
        'name': 'Turnigy Plush 80A',
        'damped_enabled': 0,
      },
      '#TurnigyNfet18A#': {
        'name': 'Turnigy Plush Nfet 18A',
        'damped_enabled': 1,
      },
      '#TurnigyNfet25A#': {
        'name': 'Turnigy Plush Nfet 25A',
        'damped_enabled': 1,
      },
      '#TurnigyNfet30A#': {
        'name': 'Turnigy Plush Nfet 30A',
        'damped_enabled': 1,
      },
      '#XP12A#': {
        'name': 'XP 12A',
        'damped_enabled': 0,
      },
      '#XP18A#': {
        'name': 'XP 18A',
        'damped_enabled': 0,
      },
      '#XP25A#': {
        'name': 'XP 25A',
        'damped_enabled': 0,
      },
      '#XP35ASW#': {
        'name': 'XP 35A SW',
        'damped_enabled': 1,
      },
      '#XP3A#': {
        'name': 'XP 3A',
        'damped_enabled': 1,
      },
      '#XP7A#': {
        'name': 'XP 7A',
        'damped_enabled': 0,
      },
      '#XP7AFast#': {
        'name': 'XP 7A Fast',
        'damped_enabled': 1,
      },
      '#XRotor10A#': {
        'name': 'XRotor 10A',
        'damped_enabled': 1,
      },
      '#XRotor20A#': {
        'name': 'XRotor 20A',
        'damped_enabled': 1,
      },
      '#XRotor40A#': {
        'name': 'XRotor 40A',
        'damped_enabled': 1,
      },
      '#ZTWSpPro20A#': {
        'name': 'ZTW Spider Pro 20A',
        'damped_enabled': 1,
      },
      '#ZTWSpPro20AHV#': {
        'name': 'ZTW Spider Pro 20A HV',
        'damped_enabled': 1,
      },
      '#ZTWSpPro20APrm#': {
        'name': 'ZTW Spider Pro 20A Premium',
        'damped_enabled': 1,
      },
      '#ZTWSpPro30AHV#': {
        'name': 'ZTW Spider Pro 30A HV',
        'damped_enabled': 1,
      },
    },
    'Atmel': {
      '#AFRO_12A#': {
        'name': 'Afro 12A',
        'damped_enabled': 1,
      },
      '#AFRO_20A#': {
        'name': 'Afro 20A',
        'damped_enabled': 1,
      },
      '#AFRO_20A_HV#': {
        'name': 'Afro 20A HV',
        'damped_enabled': 1,
      },
      '#AFRO_30A#': {
        'name': 'Afro 30A',
        'damped_enabled': 1,
      },
      '#BlueSer_12A#': {
        'name': 'BlueSeries 12A',
        'damped_enabled': 1,
      },
      '#BlueSer_20A#': {
        'name': 'BlueSeries 20A',
        'damped_enabled': 1,
      },
      '#BlueSer_30A#': {
        'name': 'BlueSeries 30A',
        'damped_enabled': 1,
      },
      '#BlueSer_40A#': {
        'name': 'BlueSeries 40A',
        'damped_enabled': 0,
      },
      '#BlueSer_60A#': {
        'name': 'BlueSeries 60A',
        'damped_enabled': 1,
      },
      '#BlueSer_70A#': {
        'name': 'BlueSeries 70A',
        'damped_enabled': 1,
      },
      '#DYS_SN20A#': {
        'name': 'DYS SN20A',
        'damped_enabled': 1,
      },
      '#HK_UBEC_10A#': {
        'name': 'HK UBEC 10A',
        'damped_enabled': 0,
      },
      '#HK_UBEC_20A#': {
        'name': 'HK UBEC 20A',
        'damped_enabled': 1,
      },
      '#HK_UBEC_30A#': {
        'name': 'HK UBEC 30A',
        'damped_enabled': 1,
      },
      '#HK_UBEC_40A#': {
        'name': 'HK UBEC 40A',
        'damped_enabled': 1,
      },
      '#HK_UBEC_6A#': {
        'name': 'HK UBEC 6A',
        'damped_enabled': 0,
      },
      '#MStar_10Av2#': {
        'name': 'Multistar 10Av2',
        'damped_enabled': 0,
      },
      '#MStar_15A#': {
        'name': 'Multistar 15A',
        'damped_enabled': 0,
      },
      '#MStar_20A#': {
        'name': 'Multistar 20A',
        'damped_enabled': 0,
      },
      '#MStar_20Av2#': {
        'name': 'Multistar 20Av2',
        'damped_enabled': 1,
      },
      '#MStar_20A_Nfet#': {
        'name': 'Multistar 20A Nfet',
        'damped_enabled': 1,
      },
      '#MStar_30A#': {
        'name': 'Multistar 30A',
        'damped_enabled': 0,
      },
      '#MStar_40Av2#': {
        'name': 'Multistar 40Av2',
        'damped_enabled': 1,
      },
      '#MStar_45A#': {
        'name': 'Multistar 45A',
        'damped_enabled': 1,
      },
      '#Mystery_12A#': {
        'name': 'Mystery 12A',
        'damped_enabled': 0,
      },
      '#Mystery_30A#': {
        'name': 'Mystery 30A',
        'damped_enabled': 0,
      },
      '#Mystery_40A#': {
        'name': 'Mystery 40A',
        'damped_enabled': 1,
      },
      '#RCTIMER_40A#': {
        'name': 'RCTimer 40A',
        'damped_enabled': 1,
      },
      '#RCTIMERNFS_30A#': {
        'name': 'RCTimer NFS 30A',
        'damped_enabled': 1,
      },
      '#SunRBSlim_20A#': {
        'name': 'Sunrise BLHeli Slim 20A',
        'damped_enabled': 1,
      },
      '#SunRBSlim_30A#': {
        'name': 'Sunrise BLHeli Slim 30A',
        'damped_enabled': 1,
      },
      '#SunRHiM_20A#': {
        'name': 'Sunrise HiMulti 20A',
        'damped_enabled': 1,
      },
      '#SunRHiM_30A#': {
        'name': 'Sunrise HiMulti 30A',
        'damped_enabled': 1,
      },
      '#SunRHiM_40A#': {
        'name': 'Sunrise HiMulti 40A',
        'damped_enabled': 1,
      },
      '#SuperS_18A#': {
        'name': 'SuperSimple 18A',
        'damped_enabled': 0,
      },
      '#SuperS_20A#': {
        'name': 'SuperSimple 20A',
        'damped_enabled': 0,
      },
      '#SuperS_30A#': {
        'name': 'SuperSimple 30A',
        'damped_enabled': 0,
      },
      '#SuperS_40A#': {
        'name': 'SuperSimple 40A',
        'damped_enabled': 1,
      },
      '#TBS_CUBE_20A#': {
        'name': 'TBS Cube 20A',
        'damped_enabled': 1,
      },
      '#YEP_7A#': {
        'name': 'YEP 7A',
        'damped_enabled': 0,
      },
      '#ZTWSpLite18Av2#': {
        'name': 'ZTW Spider Lite 18Av2',
        'damped_enabled': 1,
      },
    },
  },
  'signatures': {
    'BLHeli_S SiLabs': [
      {
        'name': 'EFM8BB10x',
        'signature': '0xE8B1',
        'page_size': 512,
        'flash_size': 8192,
      },
      {
        'name': 'EFM8BB21x',
        'signature': '0xE8B2',
        'page_size': 512,
        'flash_size': 8192,
      },
    ],
    'SiLabs': [
      {
        'name': 'C8051F31x',
        'signature': '0xF310',
        'page_size': 512,
        'flash_size': 8192,
      },
      {
        'name': 'C8051F33x',
        'signature': '0xF330',
        'page_size': 512,
        'flash_size': 8192,
      },
      {
        'name': 'C8051F39x/37x',
        'signature': '0xF390',
        'page_size': 512,
        'flash_size': 8192,
      },
      {
        'name': 'C8051F41x',
        'signature': '0xF410',
        'page_size': 512,
        'flash_size': 8192,
      },
      {
        'name': 'C8051F85x',
        'signature': '0xF850',
        'page_size': 512,
        'flash_size': 8192,
      },
    ],
    'Atmel': [
      {
        'name': 'ATmega8(A)',
        'signature': '0x9307',
        'page_size': 32,
        'flash_size': 8192,
        'eeprom_size': 512,
      },
      {
        'name': 'ATmega88(A)',
        'signature': '0x930A',
        'page_size': 32,
        'flash_size': 8192,
        'eeprom_size': 512,
      },
      {
        'name': 'ATmega88P(A)',
        'signature': '0x930F',
        'page_size': 32,
        'flash_size': 8192,
        'eeprom_size': 512,
      },
      {
        'name': 'ATmega168P(A)',
        'signature': '0x940B',
        'page_size': 64,
        'flash_size': 16384,
        'eeprom_size': 512,
      },
    ],
  },
};

export {
  BLHELI_ESCS,
};
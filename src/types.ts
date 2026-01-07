
import { ReactNode } from 'react';

export interface DonutTray {
    label: string;
    conf: number;
  }
  
  export interface DonutTrayData {
    alert: boolean;
    donut_tray?: DonutTray[];
  }
  
  export interface DonutTrayResponse {
    status: number;
    data: DonutTrayData;
  }
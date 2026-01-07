import { DonutTray, DonutTrayData, DonutTrayResponse } from "../types";

const API_URL = "http://localhost:8000";

export async function getTrayList(): Promise<DonutTrayData> {
    const res = await fetch(`${API_URL}/next`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (!res.ok) throw new Error(`Failed getting tray list: ${res.status}`);
  
    const body = (await res.json()) as DonutTrayResponse;
    return body.data;
  }
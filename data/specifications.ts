import { Specification } from "@/types";
import { Cpu, Camera, Battery, Weight, Wifi, Gauge, Component, Radio, Frame, Power, PlaneTakeoff } from "lucide-react";

export const specifications: Specification[] = [
    {
      icon: Component,
      title: "Motor dan ESC",
      description: "A2212 1400KV BRUSHLESS MOTOR WITH 30A ESC",
      color: "bg-indigo-500",
    },
    {
      icon: Cpu,
      title: "Controller",
      description: "Arduino Uno",
      color: "bg-pink-500",
    },
    {
      icon: Gauge,
      title: "Gyroscope",
      description: "MPU6050 MPU-6050 3 AXIS ANALOG GYROSCOPE",
      color: "bg-teal-500",
    },
    {
      icon: Wifi,
      title: "GPS",
      description: "MODUL GPS UBLOX NEO 6MV2 U-BLOX NEO-6M",
      color: "bg-yellow-500",
    },
    {
      icon: PlaneTakeoff,
      title: "Propeller",
      description: "PROPELLER 8x4.5 CW CCW",
      color: "bg-lime-500",
    },
    {
      icon: Radio,
      title: "Transmiter dan Receiver",
      description: "FlySky FS-i6 FSi6 2.4G 6CH AFHDS RC",
      color: "bg-rose-500",
    },
    {
      icon: Frame,
      title: "Frame",
      description: "Frame F330 Drone",
      color: "bg-emerald-500",
    },
    {
      icon: Battery,
      title: "Baterai",
      description: "Lipo 3s 2200mah",
      color: "bg-amber-500",
    },
  ];
//create an atom with localstorage persistence

import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

type HexColor = `#${string}`;

export type CarCustomizations = {
  roofGlass?: HexColor;
  chrome?: HexColor;
  frontGlass?: HexColor;

  rearBumper?: HexColor;
  frontHeadLights?: HexColor;
  rearLights?: HexColor;
  fogLight?: HexColor;
  frontLeftWheelTire?: HexColor;
  frontLeftWheelDisc?: HexColor;
  frontLeftWheelRim?: HexColor;
  frontLeftWheelBolts?: HexColor;
  frontLeftWheelCaliper?: HexColor;
  frontRightWheelTire?: HexColor;
  frontRightWheelDisc?: HexColor;
  frontRightWheelRim?: HexColor;
  frontRightWheelBolts?: HexColor;
  frontRightWheelCaliper?: HexColor;
  rearLeftWheelTire?: HexColor;
  rearLeftWheelDisc?: HexColor;
  rearLeftWheelRim?: HexColor;
  rearLeftWheelBolts?: HexColor;
  rearLeftWheelCaliper?: HexColor;
  rearRightWheelTire?: HexColor;
  rearRightWheelDisc?: HexColor;
  rearRightWheelRim?: HexColor;
  rearRightWheelBolts?: HexColor;
  rearRightWheelCaliper?: HexColor;
  carColor?: HexColor;
};

export const carCustomizationsAtom = atomWithStorage<CarCustomizations>(
  "carCustomizations",
  {}
);

export enum CameraModes {
  FRONT_LEFT_WHEEL = "frontLeftWheel",
  FRONT_RIGHT_WHEEL = "frontRightWheel",
  REAR_LEFT_WHEEL = "rearLeftWheel",
  REAR_RIGHT_WHEEL = "rearRightWheel",

  FRONT = "front",
  REAR = "rear",
  OVERVIEW = "overview",
  FREE = "free",
}

export const cameraModeAtom = atom<CameraModes>(CameraModes.OVERVIEW);

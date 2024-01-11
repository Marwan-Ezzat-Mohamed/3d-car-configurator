"use client";
import {
  CameraModes,
  CarCustomizations,
  cameraModeAtom,
  carCustomizationsAtom,
} from "@/jotai";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { ColorInput } from "@mantine/core";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, rimSizes } from "@/lib/utils";

const inputCameraMap: Record<keyof typeof colorGroups, CameraModes> = {
  body: CameraModes.OVERVIEW,
  front: CameraModes.FRONT,
  rear: CameraModes.REAR,
  frontLeftWheel: CameraModes.FRONT_LEFT_WHEEL,
  frontRightWheel: CameraModes.FRONT_RIGHT_WHEEL,
  rearLeftWheel: CameraModes.REAR_LEFT_WHEEL,
  rearRightWheel: CameraModes.REAR_RIGHT_WHEEL,
};

interface ColorGroup {
  [key: string]: Partial<keyof CarCustomizations>[] | ColorGroup;
}

const colorGroups: ColorGroup = {
  body: ["carColor", "chrome"],
  front: ["frontHeadLights", "frontGlass"],
  rear: ["rearBumper", "rearLights", "roofGlass"],
  wheels: {
    frontLeftWheel: [
      "frontLeftWheelBolts",
      "frontLeftWheelRim",
      "frontLeftWheelDisc",
      "frontLeftWheelCaliper",
      "frontLeftWheelTire",
      "frontLeftRimSize",
    ],
    rearLeftWheel: [
      "rearLeftWheelBolts",
      "rearLeftWheelRim",
      "rearLeftWheelDisc",
      "rearLeftWheelCaliper",
      "rearLeftWheelTire",
      "rearLeftRimSize",
    ],
    frontRightWheel: [
      "frontRightWheelBolts",
      "frontRightWheelRim",
      "frontRightWheelDisc",
      "frontRightWheelCaliper",
      "frontRightWheelTire",
      "frontRightRimSize",
    ],
    rearRightWheel: [
      "rearRightWheelBolts",
      "rearRightWheelRim",
      "rearRightWheelDisc",
      "rearRightWheelCaliper",
      "rearRightWheelTire",
      "rearRightRimSize",
    ],
  },
};
const CarConfigurator = () => {
  const [config, setConfig] = useAtom(carCustomizationsAtom);
  const setCameraMode = useSetAtom(cameraModeAtom);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleInputChange = (
    value: string | number,
    key: keyof CarCustomizations
  ) => {
    setConfig({
      ...config,
      [key]: value,
    });
  };

  function findValue<T>(key: string, obj: T): string[] | undefined {
    for (let k in obj) {
      if (k === key) {
        return obj[k] as string[];
      } else if (typeof obj[k] === "object") {
        let result = findValue(key, obj[k] as T);
        if (result) {
          return result;
        }
      }
    }
  }

  const renderColorPicker = (key: keyof CarCustomizations) => {
    const value = findValue(key, colorGroups);
    if (!value) {
      return null;
    }
    return value.map((colorKey) => {
      const name = colorKey
        .replace(/([A-Z])/g, " $1")
        .toLocaleLowerCase()
        .replace(key.replace(/([A-Z])/g, " $1").toLocaleLowerCase(), "")
        .trim()
        .replace(/^\w/, (c) => c.toUpperCase());

      const isColor = !!config[colorKey as keyof CarCustomizations]
        ?.toString()
        .startsWith("#");

      if (!isColor) {
        return (
          <div key={colorKey} className="w-full">
            <span className="font-medium text-sm">Rim Size</span>
            <div className="flex gap-2">
              {rimSizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    handleInputChange(size, colorKey as keyof CarCustomizations)
                  }
                  className={cn(
                    "w-full capitalize rounded-lg py-2 font-bold bg-gray-100",
                    size === config[colorKey as keyof CarCustomizations] &&
                      "bg-gray-300 ring-2 ring-gray-400"
                  )}
                >
                  {size} inch
                </button>
              ))}
            </div>
          </div>
        );
      }

      return (
        <div key={colorKey} className="w-full ">
          <ColorInput
            label={name}
            format="hex"
            value={config[colorKey as keyof CarCustomizations] as string}
            onChange={(color) =>
              handleInputChange(color, colorKey as keyof CarCustomizations)
            }
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
          />
        </div>
      );
    });
  };

  return (
    <div className="absolute top-10 right-10 p-4 py-2  h-fit transition-all overflow-y-auto w-fit bg-white shadow-lg rounded-xl">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-lg shadow bg-gray-100 px-4 py-2"
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {isExpanded && (
        <div className="w-[400px] relative">
          <RecursiveTabs
            colorGroups={colorGroups}
            renderChildren={renderColorPicker}
            onTabClick={(key) => {
              if (
                !Array.isArray(colorGroups[key]) &&
                typeof colorGroups[key] === "object"
              )
                return;
              setCameraMode(inputCameraMap[key]);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CarConfigurator;

interface RecursiveTabsProps {
  colorGroups: ColorGroup;
  defaultValue?: string;
  renderChildren?: (key: keyof CarCustomizations) => React.ReactNode;
  onTabClick?: (key: string) => void;
}

const RecursiveTabs: React.FC<RecursiveTabsProps> = ({
  colorGroups,
  defaultValue,
  renderChildren,
  onTabClick,
}) => {
  const groupKeys = Object.keys(colorGroups);

  const [activeTab, setActiveTab] = useState(defaultValue ?? groupKeys[0]);

  useEffect(() => {
    onTabClick?.(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <Tabs
      defaultValue={defaultValue ?? groupKeys[0]}
      value={activeTab}
      onChange={(key) => {
        console.log({
          x: key,
        });
      }}
      onValueChange={(key) => {
        setActiveTab(key);
      }}
      className="w-full relative grid m-0 mt-2"
    >
      <TabsList className="w-full">
        {groupKeys.map((groupKey) => (
          <TabsTrigger
            key={groupKey}
            value={groupKey}
            className="w-full capitalize"
            onClick={() => setActiveTab(groupKey)}
          >
            {groupKey.replace("Wheel", "").replace(/([A-Z])/g, " $1")}
          </TabsTrigger>
        ))}
      </TabsList>
      {groupKeys.map((groupKey) => (
        <TabsContent
          key={groupKey}
          value={groupKey}
          className="gap-2 flex flex-col w-full m-0 h-fit"
        >
          {Array.isArray(colorGroups[groupKey]) ? (
            renderChildren ? (
              renderChildren(groupKey as keyof CarCustomizations)
            ) : (
              <div className="w-full">{groupKey}</div>
            )
          ) : (
            <RecursiveTabs
              colorGroups={colorGroups[groupKey] as ColorGroup}
              renderChildren={renderChildren}
              onTabClick={onTabClick}
            />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

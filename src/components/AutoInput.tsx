"use client";
import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";

interface Location {
  display_name: string;
  place_id: string;
}

interface AutoInputProps {
  Setfromavalue: (value: string) => void;
}

const AutoInput: React.FC<AutoInputProps> = ({ Setfromavalue }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<Location[]>([]);

  // Debounce state
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  // Debounce input to avoid excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500); // Wait 500ms before updating debouncedValue

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  // Fetch locations only when debouncedValue changes
  useEffect(() => {
    if (!debouncedValue) return;

    const fetchLocations = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${debouncedValue}`
        );
        const data: Location[] = await res.json();

        // Remove duplicate locations using Map
        const uniqueLocations = Array.from(
          new Map(data.map((place) => [place.display_name, place])).values()
        );

        setOptions(uniqueLocations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, [debouncedValue]);

  return (
    <Autocomplete
      freeSolo
      options={options.map((i) => i.display_name)}
      onInputChange={(event, newValue) => {
        setInputValue(newValue);
        Setfromavalue(newValue);
      }}
      renderInput={(params) => <TextField {...params} className=" outline-none !p-[0rem] "  />}
      className="rounded-[10px] p-[0rem] bg-white outline-none  "
    />
  );
};

export default AutoInput;

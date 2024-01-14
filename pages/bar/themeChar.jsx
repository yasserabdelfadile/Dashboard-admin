import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

// eslint-disable-next-line react/prop-types
const Bar = ({ height, Isdashboard = false, scheme }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();

  return (
    <Box sx={{ height: height }}>
      <ResponsiveBar
        theme={
          // You can pass this object to the `theme` property
          {
            //background: "#ffffff",
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            axis: {
              domain: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            grid: {
              line: {
                stroke: "#dddddd",
                strokeWidth: 1,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: theme.palette.text.primary,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
            tooltip: {
              container: {
                background: theme.palette.background.paper,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }
        }
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: scheme }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: Isdashboard ? null : "dots",
          },
          {
            match: {
              id: Isdashboard ? null : "sandwich",
            },
            id: Isdashboard ? null : "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: Isdashboard ? null : "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: Isdashboard ? null : "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: Isdashboard ? 1 : 3,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  );
};
export default Bar;
const data = [
  {
    country: "AD",
    "hot dog": 68,
    "hot dogColor": "hsl(121, 70%, 50%)",
    burger: 54,
    burgerColor: "hsl(85, 70%, 50%)",
    sandwich: 30,
    sandwichColor: "hsl(186, 70%, 50%)",
    kebab: 176,
    kebabColor: "hsl(283, 70%, 50%)",
    fries: 100,
    friesColor: "hsl(139, 70%, 50%)",
    donut: 157,
    donutColor: "hsl(20, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 198,
    "hot dogColor": "hsl(320, 70%, 50%)",
    burger: 73,
    burgerColor: "hsl(60, 70%, 50%)",
    sandwich: 92,
    sandwichColor: "hsl(262, 70%, 50%)",
    kebab: 185,
    kebabColor: "hsl(296, 70%, 50%)",
    fries: 157,
    friesColor: "hsl(33, 70%, 50%)",
    donut: 86,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 70,
    "hot dogColor": "hsl(6, 70%, 50%)",
    burger: 137,
    burgerColor: "hsl(328, 70%, 50%)",
    sandwich: 11,
    sandwichColor: "hsl(203, 70%, 50%)",
    kebab: 46,
    kebabColor: "hsl(108, 70%, 50%)",
    fries: 23,
    friesColor: "hsl(4, 70%, 50%)",
    donut: 108,
    donutColor: "hsl(38, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 191,
    "hot dogColor": "hsl(195, 70%, 50%)",
    burger: 31,
    burgerColor: "hsl(343, 70%, 50%)",
    sandwich: 182,
    sandwichColor: "hsl(205, 70%, 50%)",
    kebab: 27,
    kebabColor: "hsl(132, 70%, 50%)",
    fries: 38,
    friesColor: "hsl(305, 70%, 50%)",
    donut: 107,
    donutColor: "hsl(255, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 184,
    "hot dogColor": "hsl(213, 70%, 50%)",
    burger: 55,
    burgerColor: "hsl(65, 70%, 50%)",
    sandwich: 195,
    sandwichColor: "hsl(288, 70%, 50%)",
    kebab: 42,
    kebabColor: "hsl(136, 70%, 50%)",
    fries: 114,
    friesColor: "hsl(129, 70%, 50%)",
    donut: 27,
    donutColor: "hsl(281, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 191,
    "hot dogColor": "hsl(297, 70%, 50%)",
    burger: 14,
    burgerColor: "hsl(47, 70%, 50%)",
    sandwich: 48,
    sandwichColor: "hsl(346, 70%, 50%)",
    kebab: 28,
    kebabColor: "hsl(213, 70%, 50%)",
    fries: 92,
    friesColor: "hsl(143, 70%, 50%)",
    donut: 77,
    donutColor: "hsl(180, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 175,
    "hot dogColor": "hsl(162, 70%, 50%)",
    burger: 181,
    burgerColor: "hsl(283, 70%, 50%)",
    sandwich: 104,
    sandwichColor: "hsl(338, 70%, 50%)",
    kebab: 7,
    kebabColor: "hsl(354, 70%, 50%)",
    fries: 3,
    friesColor: "hsl(264, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(125, 70%, 50%)",
  },
];

import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const purpleColor = "#6870fa";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const legendOffsetX = isMobile ? 50 : 120;
  const legendItemWidth = isMobile ? 60 : 100;
  const mobileMargins = { top: 50, right: 100, bottom: 50, left: 100 };
  const desktopMargins = { top: 50, right: 130, bottom: 50, left: 60 };
  const margins = isMobile ? mobileMargins : desktopMargins;
  return (
    <ResponsiveBar
      data={data}
      theme={{
        
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["This Month"]}
      indexBy="day"
      margin={margins} 
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={(bar) => (bar.id === "This Month" ? purpleColor : "#38bcb2")}
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
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "day", 
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", 
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: isMobile ? "top" : "bottom-right", 
          direction: isMobile ? "row" : "column", 
          justify: false,
          translateX: isMobile ? -20 : legendOffsetX,
          translateY: isMobile ? -30 : 0,
          itemsSpacing: 2,
          itemWidth: legendItemWidth,
          itemHeight: 20,
          itemDirection: isMobile ? "left-to-right" : "top-to-bottom",
          itemOpacity: 0.85,
          symbolSize: isMobile ? 15 : 20, 
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
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in day: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;

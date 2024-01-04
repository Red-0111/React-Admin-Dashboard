import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: colors.grey[100],
              fontSize: isMobile ? "0.7rem" : undefined,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {!isMobile && <ProgressCircle progress={progress} />}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant="h5"
          sx={{
            color: colors.greenAccent[500],
            fontSize: isMobile ? "0.7rem" : undefined,
          }}
        >
          {subtitle}
        </Typography>
        {!isMobile && (
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{
              color: colors.greenAccent[600],
              fontSize: isMobile ? "0.7rem" : undefined,
            }}
          >
            {increase}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StatBox;

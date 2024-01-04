import { Box, Button, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import Header from "../../components/Header";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      {/* SEARCH BAR */}
      <Typography variant="h3" fontWeight="600" sx={{ padding: "10px 20px 0 20px" }}>
        Hello Mad ✋
      </Typography>

      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        width="300px"
        height="50px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box>
        {isMobile ? (
          <IconButton>
            <UploadIcon />
          </IconButton>
        ) : (
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <UploadIcon sx={{ mr: "10px" }} />
            New Upload
          </Button>
        )}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

import { Box, Typography, useTheme , useMediaQuery} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions, mockTableData, mockSale } from "../../data/mockData";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import React from "react";
import ProgressCircleTwo from "../../components/ProgressCircleTwo";



const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box m="20px" pb="20px">  
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* STATBOXES */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Impressions"
            subtitle="1,325,134"
            progress="0.75"
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Total Audience"
            subtitle="431,225"
            progress="0.50"
            increase="+21%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Engagements"
            subtitle="32,441"
            progress="0.30"
            increase="+5%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Engaged Audience"
            subtitle="12,361"
            progress="0.80"
            increase="+43%"
          />
        </Box>

        {/* REVENUE LINE CHART */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue
              </Typography>
              
            </Box>
            <Box>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600" marginBottom="10px">
      This Month 🔻
    </Typography>
            </Box>

            {/* VISITOR BAR GRAPH */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={false} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Visitors
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        

        {/* SALES PROGRESS CIRCLE */}
        <Box
      gridColumn={isMobile ? "span 12" : "span 4"}
      gridRow={isMobile ? "span 2" : "span 4"}
      backgroundColor={colors.primary[400]}
      p="15px"
      mb={isMobile ? "0px" : "20px"}
    >
      <Typography variant="h5" fontWeight="600">
        Sale
      </Typography>
      <Box display="flex" flexDirection={isMobile ? "column" : "column"} alignItems={isMobile ? "center" : "center"} mt={isMobile ? "10px" : "25px"}>
        <ProgressCircleTwo size={isMobile ? "180" : "280"} />

        {/* Current Week */}
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          mt={isMobile ? "10px" : "25px"}
        >
          <Typography variant="h5" sx={{ mr: isMobile ? "0px" : "30px" }}>
            Current Week
          </Typography>
          <Typography variant="h5">{isMobile ? "2000" : "2000"}</Typography>
          {!isMobile && (
            <Typography
              variant="h5"
              fontStyle="italic"
              sx={{ color: colors.greenAccent[600], ml: "30px" }}
            >
              +0.3%
            </Typography>
          )}
        </Box>

        {/* Last Week */}
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          mt={isMobile ? "10px" : "30px"}
        >
          <Typography variant="h5" sx={{ mr: isMobile ? "0px" : "45px" }}>
            Last Week
          </Typography>
          <Typography variant="h5">{isMobile ? "1500" : "1500"}</Typography>
          {!isMobile && (
            <Typography
              variant="h5"
              fontStyle="italic"
              sx={{ color: colors.redAccent[600], ml: "30px" }}
            >
              -0.3%
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
          
        {/* WEEKLY SALES GRAPH & DATA */}
        <Box
        gridColumn={isMobile ? "span 6" : "span 4"}
        gridRow={isMobile ? "span 4" : "span 4"}
        backgroundColor={colors.primary[400]}
        p="15px"
        mb={"20px"}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ marginBottom: "15px", fontSize: isMobile ? "18px" : "24px" }}
        >
          Weekly Sales Stats
        </Typography>
        <Box height="200px">
          <LineChart isDashboard={true} />

          {mockSale.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                  sx={{ fontSize: isMobile ? "14px" : "18px" }}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]} sx={{ fontSize: isMobile ? "12px" : "14px" }}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box
                backgroundColor={colors.blueAccent[700]}
                p="5px 10px"
                borderRadius="4px"
              >
                <Typography color={colors.blueAccent[300]}>{transaction.cost}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* STUDENT QUERIES */}

        <Box
          gridColumn={isMobile ? "span 6" : "span 4"}
          gridRow={isMobile ? "span 4" : "span 4"}
          backgroundColor={colors.primary[400]}
          overflow="auto"
          mb="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Student Queries
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems="center"
              p="15px"
            >
              <img
                alt="profile-user"
                width="25px"
                height="25px"
                src={`../../assets/profile.jpg`}
                style={{ cursor: "pointer" }}
              />
              <Box ml={isMobile ? "0" : "15px"} textAlign={isMobile ? "center" : "left"}>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h6"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box
                ml={isMobile ? "0" : "15px"}
                mt={isMobile ? "10px" : "0"}
                display={isMobile ? "flex" : "inline-flex"}
                flexDirection={isMobile ? "column" : "row"}
              >
                <Box
                  backgroundColor={colors.greenAccent[700]}
                  p="5px 10px"
                  borderRadius="4px"
                  mb={isMobile ? "5px" : "0"}
                  mr={isMobile ? "0" : "10px"}
                  ml={isMobile ? "0" : "20px"}
                >
                  <Typography color={colors.greenAccent[300]}>Approval</Typography>
                </Box>
                <Box
                  backgroundColor={colors.redAccent[700]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  <Typography color={colors.redAccent[300]}>Decline</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

    {/* COURSE STATUS TABLE */}  
      
        <Box
  gridColumn="span 4"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  overflow="auto"
>
  <Box
    display="flex"
    justifyContent="space-between"
    
    borderBottom={`4px solid ${colors.primary[500]}`}
    colors={colors.grey[100]}
    p="15px"
  >
    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" marginTop="10px" marginBottom="10px">
      Course Status
    </Typography>
    <Typography color={colors.grey[100]} variant="h5" fontWeight="600" marginTop="10px" marginBottom="10px">
      This Month 🔻
    </Typography>
  </Box>
  
  <table style={{width:'100%', borderCollapse: 'separate', borderSpacing: '20px' }}>
    <thead >
      <tr>
        <th style={{textAlign: 'left' }}>Name</th>
        <th style={{textAlign: 'left' }}>Category</th>
        <th style={{textAlign: 'left' }}>Sale</th>
        <th style={{textAlign: 'left' }}>Rating</th>
        <th style={{textAlign: 'left' }}>Earning</th>
        <th style={{textAlign: 'left' }}>Visitor</th>
      </tr>
    </thead>
    <tbody>
      {mockTableData.map((row, i) => (
        <tr key={`row-${i}`}>
          <td style={{display: "flex", alignItems: "center"}}><img
                  alt="profile-user"
                  width="25px"
                  height="25px"
                  src={`../../assets/profile.jpg`}
                  style={{ cursor: "pointer",marginRight: "8px" }}
                />{row.name}</td>
          <td>{row.category}</td>
          <td>{row.sale}</td>
          <td>{row.rating}</td>
          <td>{row.earning}</td>
          <td>{row.visitor}</td>
        </tr>
      ))}
    </tbody>
  </table>
</Box>

    </Box>
    
  );
};

export default Dashboard;

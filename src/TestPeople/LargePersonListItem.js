import { Grid, Box } from "@chakra-ui/react";

const withStyle = (WrappedComponent, style) => {
  return (props) => {
    return <WrappedComponent {...props} style={style} />;
  };
};

const Button = ({ style, ...props }) => {
  return <button style={style} {...props} />;
};

const RedButton = withStyle(Button, { backgroundColor: "red" });
const GreenButton = withStyle(Button, { backgroundColor: "green" });
const BlueButton = withStyle(Button, { backgroundColor: "blue" });

const Test1122 = () => {
  return (
    <Grid templateColumns="2fr 1fr">
      <RedButton>Click me</RedButton>
      <GreenButton>Click me</GreenButton>
      <BlueButton>Click me</BlueButton>

      <Box>Left Content</Box>
      <Box>Right Content</Box>
    </Grid>
  );
};
export default Test1122;

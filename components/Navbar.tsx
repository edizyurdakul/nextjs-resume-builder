import Link from "next/link";
import { Box, Text, Button } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function Navbar() {
  const { classes } = useStyles();

  return (
    <Box component={"header"} className={classes.flex}>
      <Text size={"xl"}>
        <Text color={"violet"} inherit component={"span"}>
          NextJS{" "}
        </Text>
        Resume Builder
      </Text>
      <Link href="/create-resume" passHref>
        <Button component="a" color={"violet"} variant={"outline"}>
          Create Resume
        </Button>
      </Link>
    </Box>
  );
}

export default Navbar;

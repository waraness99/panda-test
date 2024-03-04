import { Box, Stack, cva } from '@panda-test/styled-system';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => {
    const square2 = cva({
      base: {
        w: '16',
        h: '16',
        bg: 'blue.500',
      },
    });

    return (
      <Stack gap="4" m="16">
        <Box w="16" h="16" bg="red.500" />
        {/* 👇 CVA, SVA will not be pre-generated */}
        <Box className={square2()} />
      </Stack>
    );
  },
});

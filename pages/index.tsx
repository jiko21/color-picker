import type { GetServerSidePropsContext, NextPage } from 'next'
import { ColorPanels } from "@/components/organisms/ColorPanels";
import { useCallback } from "react";
import { useRouter } from "next/router";
import {generateRandomColor} from "@/util/color";

const Home: NextPage<{ colors: string[] }> = ({ colors }) => {
  const router = useRouter();
  const addColor = useCallback(() => {
    if (colors.length < 5) {
      const newColors = [...colors, generateRandomColor()];
      router.replace({
        query: {
          color: newColors,
        },
      });
    }
  }, [colors, router]);

  const setColor = useCallback((value: string, i: number) => {
    const newColors = [...colors.slice(0, i), value, ...colors.slice(i + 1, colors.length)];
    router.replace({
      query: {
        color: newColors,
      },
    });
  }, [colors, router]);

  return <ColorPanels colors={colors} addColor={addColor} setColor={setColor} />
}

export const getServerSideProps = async ({
   query,
 }: GetServerSidePropsContext) => {
  const color = query.color
  return {
    props: {
      colors: typeof color === 'string' ? [color] : color,
    },
  }
}
export default Home

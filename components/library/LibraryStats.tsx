import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { AppTheme } from "@/constants/theme";

export default function LibraryStats() {
  const theme = useTheme();

  return (
    <View style={styles(theme).container} >
      {/*Top Row*/}
      <View style={styles(theme).topRow}>
        <View style={styles(theme).statWrapper}>
          <Text style={styles(theme).number}>10</Text>
          <Text style={styles(theme).subtext}>BOOKS</Text>
        </View>
        <View style={styles(theme).statWrapper}>
          <Text style={styles(theme).number}>4</Text>
          <Text style={styles(theme).subtext}>AUTHORS</Text>
        </View>
        <View style={styles(theme).statWrapper}>
          <Text style={styles(theme).number}>3</Text>
          <Text style={styles(theme).subtext}>GENRES</Text>
        </View>
      </View>
      {/*Bottom Row*/}
      <View style={styles(theme).bottomRow}>
        {/*Left stat flexDir: col*/}
        <View style={styles(theme).bottomStatWrapper}>
          <Text style={styles(theme).subtext}>TOP AUTHOR</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={{ color: theme.accentOne.mid, fontSize: 6 }}>●</Text>
            <Text style={styles(theme).phrase}>Brandon Sanderson</Text>
          </View>
        </View>
        {/*Right stat flexDir: col*/}
        <View style={styles(theme).bottomStatWrapper}>
          <Text style={styles(theme).subtext}>TOP GENRE</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={[styles(theme).dot, { color: theme.accentTwo.mid }]}>●</Text>
            <Text style={styles(theme).phrase}>Historical Fiction</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) => StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
    gap: 12,
    flexDirection: 'column',
    height: 180,
  },
  statWrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomStatWrapper: {
    flex: 1,
    backgroundColor: theme.stats.backgroudColor,
    borderRadius: theme.stats.borderRadius,
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 4,
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 22,
    backgroundColor: theme.stats.backgroudColor,
    borderRadius: theme.stats.borderRadius,
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dot: {
    fontSize: 6
  },
  subtext: {
    fontFamily: theme.stats.subtext.font,
    fontSize: theme.stats.subtext.fontSize,
    color: theme.stats.subtext.color,
  },
  phrase: {
    fontFamily: theme.stats.phrase.font,
    fontSize: theme.stats.phrase.fontSize,
    color: theme.stats.phrase.color,
    flexShrink: 1,
  },
  number: {
    fontFamily: theme.stats.number.font,
    fontSize: theme.stats.number.fontSize,
    color: theme.stats.number.color,
  }
});

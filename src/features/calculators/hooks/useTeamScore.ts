import type { BestDrivers, BestParts } from '../types';
import type { PartStat } from '@/features/parts';

const useTeamScore = (driver: BestDrivers, parts: BestParts) => {
  const { driver1, driver2, hasTwoDrivers } = driver;
  const { bestBrake, bestEngine, bestFrontWing, bestGearbox, bestRearWing, bestSuspension } = parts;

  const calculateStatSumWithoutPitStopTime = (stat: PartStat) =>
    stat.cornering + stat.powerUnit + stat.reliability + stat.reliability;

  const pitStopTimeSum =
    bestBrake.stat.pitStopTime +
    bestEngine.stat.pitStopTime +
    bestFrontWing.stat.pitStopTime +
    bestGearbox.stat.pitStopTime +
    bestRearWing.stat.pitStopTime +
    bestSuspension.stat.pitStopTime;

  let teamScore =
    calculateStatSumWithoutPitStopTime(bestBrake.stat) +
    calculateStatSumWithoutPitStopTime(bestEngine.stat) +
    calculateStatSumWithoutPitStopTime(bestFrontWing.stat) +
    calculateStatSumWithoutPitStopTime(bestGearbox.stat) +
    calculateStatSumWithoutPitStopTime(bestRearWing.stat) +
    calculateStatSumWithoutPitStopTime(bestSuspension.stat);

  // FIXME: Random number that works 🤡
  teamScore += Math.floor((6 - pitStopTimeSum) / 0.0201);

  if (hasTwoDrivers) {
    teamScore += driver1.stat.statsSum;
    teamScore += driver2.stat.statsSum;
  }

  return teamScore.toFixed(0);
};

export default useTeamScore;

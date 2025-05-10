import React, { useState } from 'react';
import {
  DestinyConfigBuilder,
  DestinyBoard,
  DayTimeGround,
  ConfigType,
  Gender,
} from '../zw-lib';

const times = [
  '子時','丑時','寅時','卯時','辰時','巳時',
  '午時','未時','申時','酉時','戌時','亥時'
];

const BoardResult: React.FC = () => {
  // 狀態：年、月、日、時辰、性別、以及命盤結果字串
  const [year, setYear] = useState<number>(1985);
  const [month, setMonth] = useState<number>(6);
  const [day, setDay] = useState<number>(15);
  const [time, setTime] = useState<string>('午時');
  const [gender, setGender] = useState<Gender>(Gender.F);
  const [result, setResult] = useState<string>('');

  const handleGenerate = () => {
    // 靜態方法 withSolar 回傳 config 物件
    const config = DestinyConfigBuilder.withSolar({
      year,
      month,
      day,
      bornTimeGround: DayTimeGround.getByName(time),
      configType: ConfigType.SKY,
      gender,
    });
    // 用 config 建立命盤
    const board = new DestinyBoard(config);
    // 將 toString() 的結果放入 state
    setResult(board.toString());
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>紫微排盤</h2>
      <div>
        <label>年：<input type="number" value={year} onChange={e => setYear(Number(e.target.value))} /></label>
      </div>
      <div>
        <label>月：<input type="number" value={month} onChange={e => setMonth(Number(e.target.value))} /></label>
      </div>
      <div>
        <label>日：<input type="number" value={day} onChange={e => setDay(Number(e.target.value))} /></label>
      </div>
      <div>
        <label>
          時辰：
          <select value={time} onChange={e => setTime(e.target.value)}>
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label>
          性別：
          <select value={gender} onChange={e => setGender(e.target.value as Gender)}>
            <option value={Gender.F}>女</option>
            <option value={Gender.M}>男</option>
          </select>
        </label>
      </div>
      <button onClick={handleGenerate} style={{ marginTop: '1rem' }}>
        產生紫微命盤
      </button>
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: '1rem' }}>
        {result}
      </pre>
    </div>
  );
};

export default BoardResult;

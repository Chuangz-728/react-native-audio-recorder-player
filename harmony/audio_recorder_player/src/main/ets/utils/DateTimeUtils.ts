/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default class DateTimeUtil {
  getTime(): string {
    const DATETIME = new Date();
    return this.concatTime(
      DATETIME.getHours(),
      DATETIME.getMinutes(),
      DATETIME.getSeconds(),
    );
  }

  getDate(): string {
    const DATETIME = new Date();
    return this.concatDate(
      DATETIME.getFullYear(),
      DATETIME.getMonth() + 1,
      DATETIME.getDate(),
    );
  }

  fill(value: number): string {
    return (value > 9 ? '' : '0') + value;
  }

  concatDate(year: number, month: number, date: number): string {
    return `${year}${month}${date}`;
  }

  concatTime(hour: number, minute: number, second: number): string {
    return `${this.fill(hour)}${this.fill(minute)}${this.fill(second)}`;
  }
}

export function getShownTimer(ms: number): string {
  let seconds: number = Math.round(ms / 1000);
  let sec: number | string = seconds % 60;
  let min: number | string = (seconds - sec) / 60;
  if (sec < 10) {
    sec = '0' + sec;
  }
  if (min < 10) {
    min = '0' + min;
  }
  return min + ':' + sec;
}

export function dateTime(t: number): string {
  let minute: number = Math.floor(t / 60) % 60;
  let m = minute < 10 ? '0' + minute : minute;
  let second: number = t % 60;
  let s = second < 10 ? '0' + second : second;
  return m + ':' + s;
}

export function getMMSSSS(milisecs: number): string {
  const secs = Math.floor(milisecs / 1000);
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  const miliseconds = Math.floor((milisecs % 1000) / 10);
  return `${formatString(minutes)}:${formatString(
    seconds,
  )}:${formatString(miliseconds)}`;
}

export function getMMSS(milisecs: number): string {
  const secs = Math.floor(milisecs / 1000);
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  return `${formatString(minutes)}:${formatString(seconds)}`;
}

function formatString(num: number): string {
  return `0${num}`.slice(-2);
}

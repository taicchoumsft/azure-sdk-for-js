// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { formatPreferHeader } from "../../../src/internal/util.js";
import { describe, it, assert } from "vitest";

describe("Utils unit tests", () => {
  type PreferHeadersArg = Parameters<typeof formatPreferHeader>[0];

  const headers: [PreferHeadersArg, ReturnType<typeof formatPreferHeader>][] = [
    [undefined, undefined],
    [{ includeQueryStatistics: true }, { Prefer: "include-statistics=true" }],
    [{ serverTimeoutInSeconds: 7 }, { Prefer: "wait=7" }],
    [
      { serverTimeoutInSeconds: 7, includeQueryStatistics: true },
      { Prefer: "wait=7,include-statistics=true" },
    ],
  ];

  headers.forEach(([options, expectedResult]) => {
    it(`formatPreferHeader(${JSON.stringify(options)})`, () => {
      const actualResult = formatPreferHeader(options);
      assert.deepEqual(actualResult, expectedResult);
    });
  });
});

import { describe, expect, test } from "vitest";
import shopApi from "../shopApi";

describe('Shop Api tests', () => {
    test('should be configured with the pet shop api', () => {
        expect(shopApi.defaults.baseURL).toBe('http://pet-shop.buckhill.com.hr/api/v1')
    });
});
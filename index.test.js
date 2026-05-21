const request = require("supertest");
const app = require("./index");

describe("Health Check", () => {
  test("GET /health should return 200", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});

describe("API Endpoints", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toContain("Welcome");
  });

  test("GET /api/data should return data array", async () => {
    const response = await request(app).get("/api/data");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
# ADR - Dashboard Builder

## State Management
Used React useState + useEffect.
Reason: POC scale does not need Redux. Layout persists via localStorage.

## Charting Library
Used Recharts because  it supports all 4 chart types using react API

## Type Safety
TypeScript + Zod on backend for runtime and compile-time validation and normal react.js on frontend as per document requirement.

## Data Drift Handling
- Add schemaVersion to every API response
- Validate all data with Zod before rendering
- If validation fails, show error on that widget only
- Other widgets continue working normally
- Log all schema failures for monitoring

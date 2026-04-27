import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    '@nestjs/common',
    '@nestjs/core',
    '@nestjs/jwt',
    '@nestjs/passport',
    '@nestjs/swagger',
    'passport',
    'passport-local',
    'passport-jwt',
    'reflect-metadata',
    'rxjs',
    '@prisma/client',
  ],
});

import type { VidxConfig } from './types'
import { resolve } from 'node:path'
import { loadConfig } from 'bunfig'

export const defaultConfig: VidxConfig = {
  verbose: true,
}

// @ts-expect-error dtsx issue
// eslint-disable-next-line antfu/no-top-level-await
export const config: VidxConfig = await loadConfig({
  name: 'vidx',
  cwd: resolve(__dirname, '..'),
  defaultConfig,
})

import { describe, it, expect } from 'vitest'
import { tenantService } from '../tenantService'
import tenantsMock from '../../mocks/tenants.json'

describe('tenantService', () => {
  it('sould fetch all tenant stats from mock file', async () => {
    const data = await tenantService.getTenants()

    //check if data exists
    expect(data).toBeDefined()
    // Check if "Tenant A" exists in the returned data
    expect(data).toHaveProperty('Tenant A')

    //check if it matches the mock
    expect(data).toEqual(tenantsMock)
  })
})

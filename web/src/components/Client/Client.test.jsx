import { render } from '@redwoodjs/testing/web'

import Client from './Client'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Client', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Client />)
    }).not.toThrow()
  })
})

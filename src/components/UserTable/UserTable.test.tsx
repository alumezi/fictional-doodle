import React from 'react'
import { shallow } from 'enzyme'
import { Usertable } from './UserTable'

let mockUsers = [{ id: '123ewg43d3d', name: 'Arbnor Lumezi' }]
let wrapper: any
beforeEach(() => {
    wrapper = shallow(
        <Usertable users={mockUsers} addUser={() => {}} onSelect={() => {}} />
    )
})

describe('<Usertable /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('renders users', () => {
        expect(wrapper.find('.user').text()).toEqual('Arbnor Lumezi')
    })
})

import React from 'react'
import { shallow } from 'enzyme'
import { Hobbiestable } from './HobbiesTable'
import { Hobby } from '../../interfaces'

let mockHobbies: Hobby[] = [
    {
        id: '123sd3j48j',
        passion: 'medium',
        hobby: 'Swimming',
        year: '2015',
    },
]

let wrapper: any
beforeEach(() => {
    wrapper = shallow(
        <Hobbiestable
            hobbies={mockHobbies}
            addHobby={() => {}}
            deleteHobby={() => {}}
            passionLevels={[
                { value: 'low', name: 'Low' },
                { value: 'medium', name: 'Medium' },
                { value: 'high', name: 'High' },
                { value: 'very-high', name: 'Very-High' },
            ]}
        />
    )
})

describe('<Usertable /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
})

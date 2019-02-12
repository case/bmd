import { axe } from 'jest-axe'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import election from '../../public/data/election.json'

import SingleCandidateContest from './SingleCandidateContest'

it(`renders SingleCandidateContest with no selection`, async () => {
  const updateVote = jest.fn()
  const { container, getByText } = render(
    <SingleCandidateContest
      contest={election.contests[0]}
      vote=""
      updateVote={updateVote}
    />
  )
  fireEvent.click(getByText('Minnie Mouse'))
  expect(updateVote).toHaveBeenCalled()
  expect(container).toMatchSnapshot()
  expect(await axe(container.innerHTML)).toHaveNoViolations()
})

it(`renders SingleCandidateContest with Minnie Mouse selected`, async () => {
  const updateVote = jest.fn()
  const { container, getByText, getByLabelText, debug } = render(
    <SingleCandidateContest
      contest={election.contests[0]}
      vote={'minnieMouse'}
      updateVote={updateVote}
    />
  )
  debug(container)
  debug(getByLabelText('Mickey Mouse'))
  // expect(getByLabelText('Mickey Mouse').disabled).toBeTruthy()
  // fireEvent.click(getByText('Minnie Mouse'))
  // expect(updateVote).toHaveBeenCalled()
  expect(container).toMatchSnapshot()
  expect(await axe(container.innerHTML)).toHaveNoViolations()
})

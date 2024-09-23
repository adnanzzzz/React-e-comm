import React from 'react'
import Breadcum from './Breadcum'

export default function ViewQuiz() {
  return (
    <div>
      <Breadcum title='View Quiz' />
      <div className='py-10'>
      <div className='flex justify-start pb-5 pl-2'><button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Clear All</button>
      </div>
        <table className="min-w-full  leading-normal">
          <thead>
            <tr>
              <th
                className="px-5  py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                S.n0
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Quastion
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option 1
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option 2
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option 3
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Option 4
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Answer
              </th>
              <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >

                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-5 py-5 border-b  border-gray-200 bg-white text-sm">
                1.
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                What is the full form of HTML?
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                sdhsfsf
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                sfsdfsdf
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                fsdfsdf
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                fsdfsdf
              </td>
              <td className="px-5 py-5 border-b underline border-gray-200 bg-white text-sm">
                Hypertext  markup language
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
              </td>
            </tr>
          </tbody>


        </table>
       
      </div>
    </div>
  )
}

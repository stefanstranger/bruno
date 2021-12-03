import React from 'react';
import {
  Navbar,
  RequestTabs,
  Sidebar
} from '@grafnode/components';
import actions from 'providers/Store/actions';
import { useStore } from 'providers/Store';
import StyledWrapper from './StyledWrapper';

export default function Main() {
  const [state, dispatch] = useStore();

  const {
    collections,
    requestTabs,
    activeRequestTabId
  } = state;

  console.log(actions);

  return (
    <div>
      <Navbar />
      <StyledWrapper>
        <Sidebar
          collections={collections}
          actions={actions}
          dispatch={dispatch}
          activeRequestTabId={activeRequestTabId}
        />
        <section className='mt-4 flex flex-grow flex-col'>
          <RequestTabs
            requestTabs={requestTabs}
            actions={actions}
            dispatch={dispatch}
            activeRequestTabId={activeRequestTabId}
          />
        </section>
      </StyledWrapper>
    </div>
  )
}
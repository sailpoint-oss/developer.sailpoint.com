/**
 * Test payloads in the shape of the ISC "Identity Attributes Changed" event
 * trigger. Each call moves the identity to the next department, so a few
 * clicks of "Send a test event" give the monitor chart something to show.
 */

const DEPARTMENTS = ['Engineering', 'Sales', 'Finance', 'Support', 'Marketing'];
const LIFECYCLE_STATES = ['active', 'active', 'active', 'leave', 'active'];

let sent = 0;

export function nextSampleEvent(): Record<string, unknown> {
  const from = DEPARTMENTS[sent % DEPARTMENTS.length];
  const to = DEPARTMENTS[(sent + 1) % DEPARTMENTS.length];
  const lifecycle = LIFECYCLE_STATES[sent % LIFECYCLE_STATES.length];
  sent += 1;
  return {
    identity: {
      id: '2c9180866166b5b0016167c32ef31a66',
      name: 'Ada Lovelace',
      type: 'IDENTITY',
    },
    changes: [
      {attribute: 'department', oldValue: from, newValue: to},
      {
        attribute: 'cloudLifecycleState',
        oldValue: 'active',
        newValue: lifecycle,
      },
    ],
    sequence: sent,
  };
}

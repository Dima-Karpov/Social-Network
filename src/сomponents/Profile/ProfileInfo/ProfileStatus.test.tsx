import { ProfileStatus } from './ProfileStatus';
import { create } from 'react-test-renderer';


test('status from props should be id the statu', () => {

    const component = create(< ProfileStatus status='it-kamasutra.com' updateStatus={() => { }} />);
    const instance = component.getInstance();
    expect(instance?.instance.status).toBe('it-kamasutra.com')
});

test('after creation <span> should be displayed', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={() => { }} />);
    const root = component.root;
    let span = root.findAllByType('span')
    expect(span).not.toBeNull();
});
test('after creation <input> should be displayed', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={() => { }} />);
    const root = component.root;
    expect(() => {
        let input = root.findAllByType('input')
    }).toThrow();
});
test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={() => { }} />);
    const root = component.root;
    let span = root.findAllByType('span')
    expect(span).toBe('it-kamasutra.com');
});
test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={() => { }} />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.activateEditMode();
    let input = root.findByType('input');
    expect(input.props.value).toBe('it-kamasutra.com');
});
test('callback should be called', () => {
    const mockCllback = jest.fn();
    const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus={mockCllback}/>);
    const instance = component.getInstance();
    // @ts-ignore
    instance.deActivateEditMode();
    expect(mockCllback.mock.calls.length).toBe(1)

})
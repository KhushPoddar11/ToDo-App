import {render, screen} from "@testing-library/react";
import ClearButton from "./ClearButton";


test('first test', () => {
    render(<ClearButton />)
    screen.debug();
});

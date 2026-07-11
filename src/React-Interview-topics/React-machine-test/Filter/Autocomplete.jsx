import './Autocomplete.css';
import { useState, useRef, useEffect } from 'react';
import { useDebounce } from './debounceHook';

const suggestionsList = [
    { id: 1, text: 'Apple' },
    { id: 2, text: 'Banana' },
    { id: 3, text: 'Cherry' },
    { id: 4, text: 'Date' },
    { id: 5, text: 'Elderberry' },
    { id: 6, text: 'Fig' },
    { id: 7, text: 'Grape' },
    { id: 8, text: 'Honeydew' },
    { id: 9, text: 'Indian Fig' },
    { id: 10, text: 'Jackfruit' },
    { id: 11, text: 'Kiwi' },
    { id: 12, text: 'Lemon' },
    { id: 13, text: 'Mango' },
    { id: 14, text: 'Nectarine' },
    { id: 15, text: 'Orange' },
    { id: 16, text: 'Papaya' },
    { id: 17, text: 'Quince' },
    { id: 18, text: 'Raspberry' },
    { id: 19, text: 'Strawberry' },
    { id: 20, text: 'Tangerine' }
]

const AutocompleteComponent = () => {

    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestionRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const filteredSuggestions = suggestionsList.filter(suggestion => suggestion.text.toLowerCase().includes(debouncedValue?.toLowerCase()));
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);    
    }, [debouncedValue]);

    useEffect(() => {
        if(showSuggestions) {
            suggestionRef.current.showPopover();
            positionSuggestionContainer();
        } else {
            suggestionRef.current.hidePopover();
        }
    }, [showSuggestions]);

    const positionSuggestionContainer = () => {
        const inputRect = inputRef.current.getBoundingClientRect();
        const suggestionContainer = suggestionRef.current;
        suggestionContainer.style.position = 'absolute';
        suggestionContainer.style.top = `${inputRect.bottom + window.scrollY}px`;
        suggestionContainer.style.left = `${inputRect.left + window.scrollX}px`;
        suggestionContainer.style.width = `${inputRect.width + 2}px`;
    }

    return (
        <div className="autocomplete-container">
          <h3>Auto-complete</h3>
          <input type="text" className="form-control" id="search-text" name="search-text" 
          placeholder="Type to search..." onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setShowSuggestions(false)} ref={inputRef}/>
          <div className="suggestion-container" ref={suggestionRef} popover="manual">
            <ul className="list-group">
              {suggestions.map((suggestion) => {
                return (
                  <li key={suggestion.id} className="list-group-item">{suggestion.text}</li>
                )
              })}
            </ul>
          </div>
        </div>
    )

}

export default AutocompleteComponent;
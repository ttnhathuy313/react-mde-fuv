import { ChakraProvider, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToolbarButton } from './toolbar-button';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { TextAreaTextController } from '../src';

interface PreviewProps {
    textController: TextAreaTextController | null;
}

const Preview: React.FunctionComponent<PreviewProps> = ({ textController }) => {
    console.log('You just rerender previews')
    const navigator = useNavigate();
    return (
        <ChakraProvider>
            <HStack py={2}>
                <ToolbarButton
                    onClick={async () => {
                        navigator("/");
                    }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </ToolbarButton>
            </HStack>

            <div>Preview</div>
            <div>
                {textController == null ? 'Empty' : textController.getState().text}
            </div>

        </ChakraProvider>
    );
}

export default Preview
import * as React from "react";
import { Box, ChakraProvider, HStack, Textarea, UnorderedList } from "@chakra-ui/react";
import { headingLevel1Command, TextAreaTextController, useTextAreaMarkdownEditor } from "../src";
import { faBold, faItalic, faCode, faHeading, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { boldCommand, codeCommand, italicCommand, unorderedListCommand } from "../src";
import { ToolbarButton } from "./toolbar-button";
import { useNavigate } from "react-router-dom";

export type EditorProps = {
    callback: (r: TextAreaTextController | null) => void;
};

export const Editor: React.FunctionComponent<EditorProps> = ({ callback }) => {
    const { ref, textController, commandController } = useTextAreaMarkdownEditor({
        commandMap: {
            bold: boldCommand,
            italic: italicCommand,
            code: codeCommand,
            headingLevel1: headingLevel1Command,
            unorderedList: unorderedListCommand
        }
    });

    const navigator = useNavigate();

    return (
        <ChakraProvider>
            <Box p={3}>
                <HStack py={2}>
                    <ToolbarButton
                        onClick={async () => {
                            await commandController.executeCommand("bold");
                        }}
                    >
                        <FontAwesomeIcon icon={faBold} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={async () => {
                            await commandController.executeCommand("italic");
                        }}
                    >
                        <FontAwesomeIcon icon={faItalic} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={async () => {
                            await commandController.executeCommand("code");
                        }}
                    >
                        <FontAwesomeIcon icon={faCode} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={async () => {
                            await commandController.executeCommand("headingLevel1");
                        }}
                    >
                        <FontAwesomeIcon icon={faHeading} />
                    </ToolbarButton>
                    <ToolbarButton
                        onClick={async () => {
                            await commandController.executeCommand("unorderedList");
                        }}
                    >
                        <FontAwesomeIcon icon={faList} />
                    </ToolbarButton>
                    <ToolbarButton onClick={async () => {
                        callback(textController)
                        navigator('/preview');
                        // console.log('updated')
                    }}>
                        Preview
                    </  ToolbarButton>
                </HStack>
                <Textarea
                    ref={ref}
                    placeholder="I'm a markdown editor"
                    fontFamily={"monospace"}
                />
            </Box>
        </ChakraProvider>
    );
};

export default Editor
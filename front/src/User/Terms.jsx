import React from 'react';
import {
    Button,
    Checkbox,
    Stack,
    Textarea,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

function Terms() {
    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
    // const {isOpen, onOpen, onClose} = useDisclosure()
    // const cancelRef = React.useRef()

    const termFormStyle = {
        width: '80%',
        marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        resize: 'none'
    }

    const termTitleStyle = {
        textAlign: 'left',
        marginLeft: '10%',
        fontSize: '20px',
        height: '100%',
        width: '80%'
    }
    const formSize = {
        height: '100%',
        width: '80%',
        resize: "none"
    }

    return (
        <div>
            <form style={termFormStyle} name="termForm" action="/signUp">
                <div>
                    <p style={termTitleStyle}>이용약관</p>
                    <br/>
                    <Textarea isDisabled placeholder={"개인정보활용 동의 들어가야지"} style={formSize} rows={20}/>
                </div>
                <br/>
                <div>
                    <p style={termTitleStyle}>개인정보 수집 및 이용에 관한 약관</p>
                    <Textarea isDisabled placeholder={"이용 약관이 들어가야지"} style={formSize} rows={20}/>
                </div>
                <div style={{marginLeft: '8.5%'}}>
                    <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox isChecked={checkedItems[0]}
                                  onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>
                            이용약관을 읽었으며,해당 내용에 동의합니다 <strong>(필수)</strong>
                        </Checkbox>
                        <Checkbox isChecked={checkedItems[1]}
                                  onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}>
                            개인정보 수집 및 이용에 관한 약관을 확인하였으며, 약관에 동의합니다 <strong>(필수)</strong>
                        </Checkbox>
                    </Stack>
                </div>
                <div>
                    <br/>
                    <Checkbox
                        isChecked={allChecked} isIndeterminate={isIndeterminate}
                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}>
                        모든 약관에 동의합니다 </Checkbox>

                </div>
                <div>
                    <Button colorScheme={'red'} rightIcon={<ArrowForwardIcon/>} size={'lg'}  type='submit'
                            disabled={!allChecked}> 다음 </Button>
                </div>
            </form>

            {/*<AlertDialog*/}
            {/*    isOpen={isOpen}*/}
            {/*    leastDestructiveRef={cancelRef}*/}
            {/*    onClose={onClose}*/}
            {/*>*/}
            {/*    <AlertDialogOverlay>*/}
            {/*        <AlertDialogContent>*/}
            {/*            <AlertDialogHeader fontSize='lg' fontWeight='bold'>*/}
            {/*                약관 동의*/}
            {/*            </AlertDialogHeader>*/}

            {/*            <AlertDialogBody>*/}
            {/*                약관에 동의하시겠습니까 ?*/}
            {/*            </AlertDialogBody>*/}

            {/*            <AlertDialogFooter>*/}
            {/*                <Button colorScheme='red'onClick={} ml={3}>*/}
            {/*                    Next*/}
            {/*                </Button>*/}

            {/*                <Button ref={cancelRef} onClick={onClose}>*/}
            {/*                    Cancel*/}
            {/*                </Button>*/}
            {/*            </AlertDialogFooter>*/}
            {/*        </AlertDialogContent>*/}
            {/*    </AlertDialogOverlay>*/}
            {/*</AlertDialog>*/}
        </div>
    );
}

export default Terms;

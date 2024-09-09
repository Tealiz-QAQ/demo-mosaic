import { Button, Image, Modal, ModalContent, Spacer } from '@nextui-org/react'
import { CloseIcon } from '../Icons'
import { BodyB2, TitleT1, TitleT2, TitleT5 } from '../Texts'

export default function ModalConnectWallet({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenChange: () => void
}) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur" hideCloseButton>
        <ModalContent style={{ backgroundColor: '#282a2d' }} className="max-w-[420px] p-4 text-foreground dark">
          {(onClose) => (
            <>
              <div className="flex items-center justify-between">
                <TitleT1>Welcome to Mosaic</TitleT1>
                <Button isIconOnly variant="light" className="h-[20px] w-[20px] min-w-fit p-0" onPress={onClose}>
                  <CloseIcon size={20} />
                </Button>
              </div>

              <Spacer y={4} />

              <BodyB2 className="text-buttonSecondary">To get started, please connect your wallet</BodyB2>

              <Spacer y={4} />

              <div className="flex flex-col gap-3">
                {/* GOOGLE */}
                <div className="flex w-full flex-col gap-1">
                  <Button className="flex items-center justify-between rounded bg-background px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Image width={20} src="/images/google.png" />
                      <TitleT2>Google</TitleT2>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-[6.67px] w-[6.67px] rounded-full bg-buttonGreen"></div>
                      <TitleT5>Detected</TitleT5>
                    </div>
                  </Button>
                </div>

                {/* Nightly */}
                <div className="flex w-full flex-col gap-1">
                  <Button className="flex items-center justify-between rounded bg-background px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Image width={20} src="/images/nightly.png" />
                      <TitleT2>Nightly</TitleT2>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-[6.67px] w-[6.67px] rounded-full bg-buttonGreen"></div>
                      <TitleT5>Detected</TitleT5>
                    </div>
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

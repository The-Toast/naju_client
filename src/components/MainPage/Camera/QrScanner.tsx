'use client'

import { useEffect, useRef, useState } from 'react'
import { BrowserMultiFormatReader } from '@zxing/browser'

import { XIcon } from '@phosphor-icons/react'

interface Props {
  onScanResultAction: (text: string) => void
  onCloseAction: () => void
}

export default function QrScanner({ onScanResultAction, onCloseAction }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsRef = useRef<{ stop: () => void } | null>(null)
  const [showErrorPopup] = useState(false) // 오류 팝업 제거 시에도 유지
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    const reader = new BrowserMultiFormatReader()
    let mounted = true

    const startScanning = async () => {
      try {
        const devices = await BrowserMultiFormatReader.listVideoInputDevices()
        const deviceId = devices[0]?.deviceId

        if (!deviceId || !videoRef.current) return

        controlsRef.current = await reader.decodeFromVideoDevice(
          deviceId,
          videoRef.current,
          (result) => {
            if (!mounted) return

            if (result) {
              onScanResultAction(result.getText())
              controlsRef.current?.stop() // ✅ 정확히 중단
              onCloseAction()
            }
          }
        )
      } catch {
        controlsRef.current?.stop()
        onCloseAction()
      }
    }

    void startScanning()

    return () => {
      mounted = false
      controlsRef.current?.stop() // ✅ 언마운트 시에도 정확히 중단
    }
  }, [onScanResultAction, onCloseAction])

  return (
    <Modal>
      <Content>
        <CloseButton
          onClick={() => {
            controlsRef.current?.stop() // ✅ 수동 중단도 지원
            onCloseAction()
          }}
        >
          <XIcon size={'28'} />
        </CloseButton>
        <Video ref={videoRef} autoPlay playsInline />
      </Content>
      {showErrorPopup && (
        <ErrorPopup>QR 코드 인식에 실패했어요. 다시 시도해 주세요.</ErrorPopup>
      )}
    </Modal>
  )
}

import styled from '@emotion/styled'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.25rem;
  background: #fff;
  padding: 1.25rem;
  border-radius: 1.5rem;
`

const Video = styled.video`
  width: 300px;
  aspect-ratio: 1 / 1;
  border-radius: 1.25rem;
  object-fit: cover;
`

const CloseButton = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`

const ErrorPopup = styled.div`
  position: absolute;
  bottom: 10%;
  padding: 0.75rem 1.25rem;
  background: #ff4d4f;
  color: #fff;
  border-radius: 0.75rem;
  font-size: 1rem;
  text-align: center;
`
import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast'

export default function Header() {
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [showPreview, setShowPreview] = useState(false)
  const [pdfData, setPdfData] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    const storedFile = localStorage.getItem('file')
    if (storedFile) {
      setPdfData(storedFile)
      const fileName = localStorage.getItem('fileName')
      if (fileName) {
        setSelectedFile({ name: fileName })
      }
    }
  }, [])

  const handleUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.type === 'application/pdf') {
        setSelectedFile(file)
        setIsUploading(true)
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64String = reader.result
          localStorage.setItem('file', base64String)
          localStorage.setItem('fileName', file.name)
          setPdfData(base64String)
          setIsUploading(false)
          toast.success('PDF uploaded and saved to local storage', {
            duration: 3000,
            position: 'bottom-center',
          })
        }
        reader.readAsDataURL(file)
      } else {
        toast.error('Please upload a PDF file', {
          duration: 3000,
          position: 'bottom-center',
        })
      }
    }
  }

  return (
    <>
      <div className="w-full shadow-sm px-4 sm:px-20 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold">AI Planet</div>
        <div className="flex items-center space-x-4">
          {selectedFile && (
            <div 
              className="flex items-center text-sm text-gray-600 cursor-pointer"
              onClick={() => setShowPreview(true)}
            >
              <FileText className="w-4 h-4 mr-2 text-green-500" />
              <span>{selectedFile.name}</span>
            </div>
          )}
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Button 
            variant="outline" 
            onClick={handleUpload} 
            disabled={isUploading}
          >
            <Upload className="w-4 h-4 mr-2" />
            {isUploading ? "Uploading..." : "Upload PDF"}
          </Button>
        </div>
      </div>

      {/* Custom Modal */}
      {showPreview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] shadow-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">PDF Preview</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setShowPreview(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full h-full">
              <iframe
                src={pdfData}
                className="w-full h-full"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
      
      <Toaster />
    </>
  )
}

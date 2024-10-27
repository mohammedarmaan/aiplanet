'use client'

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X, Trash2 } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card" // Adjust this import based on your component structure



export default function Header( {isLoading, setIsLoading, setSelectedFile, selectedFile, setUploadDone} ) {
  const [isUploading, setIsUploading] = useState(false)
  const [pdfData, setPdfData] = useState(null)
  const [showPreview, setShowPreview] = useState(false) // Define showPreview state
  const fileInputRef = useRef(null)

  useEffect(() => {
    const storedFile = localStorage.getItem("file")
    if (storedFile) {
      setPdfData(storedFile)
      const fileName = localStorage.getItem("fileName")
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
      if (file.type === "application/pdf") {
        setSelectedFile(file)
        setIsUploading(true)
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64String = reader.result
          localStorage.setItem("file", base64String)
          localStorage.setItem("fileName", file.name)
          setPdfData(base64String)
          setIsUploading(false)
          uploadFileToAPI(file)
        }
        reader.readAsDataURL(file)
      } else {
        toast.error("Please upload a PDF file", {
          duration: 3000,
          position: "top-center",
        })
      }
    }
  }

  const uploadFileToAPI = async (file) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await axios.post(
        "http://localhost:8000/extract-text",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      console.log("Extracted Text:", response.data.extracted_text)
      toast.success("Text extracted successfully", {
        duration: 3000,
        position: "top-center",
      })
    } catch (error) {
      toast.error("Failed to extract text from PDF", {
        duration: 3000,
        position: "top-center",
      })
      console.error("Error uploading file:", error)
    } finally {
      setIsLoading(false)
      setUploadDone(true)
    }
  }

  const handleDelete = () => {
    localStorage.removeItem("file")
    localStorage.removeItem("fileName")
    setUploadDone(false)
    setSelectedFile(null)
    setPdfData(null)
    toast.success("File deleted successfully", {
      duration: 3000,
      position: "top-center",
    })
  }

  return (
    <>
      <div className="w-full shadow-sm px-4 sm:px-20 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold">AI Planet</div>
        <div className="flex items-center space-x-4">
          {selectedFile && (
            <HoverCard>
              <HoverCardTrigger className="relative flex items-center text-sm text-gray-600 cursor-pointer">
                <FileText className="w-4 h-4 mr-2 text-green-500" />
                <span>{selectedFile.name}</span>
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col">
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(true)} // Set showPreview to true
                  className="mb-1"
                >
                  Preview
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDelete}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </HoverCardContent>
            </HoverCard>
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
            disabled={isUploading || isLoading}
          >
            {isUploading || isLoading ? (
              "Processing..."
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload PDF
              </>
            )}
          </Button>
        </div>
      </div>

      {/* {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
          <img src={loadgif} alt="image" />
          loading....
        </div>
      )} */}

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

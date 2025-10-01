
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TermsModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export const TermsModal = ({ isOpen, onAccept }: TermsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white border-2 border-black font-serif">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold mb-6 text-black">
            I accept and recognise the following terms by using this website:
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-sm text-black leading-relaxed">
          <div>
            <span className="font-semibold">1.</span> This website has been designed only for the purposes of dissemination of basic information regarding Virtuous Law Partners; information which is otherwise available on the internet, various public platforms and social media. However, Virtuous Law Partners is not responsible for any reliance that a reader places on such information and shall not be liable for any loss or damage caused due to any inaccuracy in or exclusion of any information, or its interpretation thereof. Reader is advised to confirm the veracity of the same from independent and expert sources.
          </div>
          
          <div>
            <span className="font-semibold">2.</span> This website is not an attempt to advertise or solicit clients, and does not seek to create or invite any lawyer-client relationship. The links provided on this website are to facilitate access to basic resources which otherwise are also available on Internet. The content herein or on such links should not be construed as a legal reference or legal advice. Readers are advised not to act on any information contained herein or on the links and should refer to legal counsels and experts in their respective jurisdictions for further information and to determine its impact.
          </div>
          
          <div>
            <span className="font-semibold">3.</span> Virtuous Law Partners advises against the use of the communication platform provided on this website for exchange of any confidential, business or politically sensitive information. User is requested to use his or her judgment and exchange of any such information shall be solely at the user's risk.
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button 
            onClick={onAccept}
            className="bg-black hover:bg-gray-800 text-white px-8 py-2 font-semibold border border-black"
          >
            I Accept
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

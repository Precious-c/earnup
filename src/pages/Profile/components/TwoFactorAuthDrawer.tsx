import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const TwoFactorAuthDrawer = () => {
  return (
    <DrawerContent className="bg-main border-stroke pt-2">
      <DrawerHeader>
        <DrawerTitle>TwoFactorAuthDrawer</DrawerTitle>
      </DrawerHeader>

      <div>TwoFactorAuthDrawer</div>

      {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
    </DrawerContent>
  );
};

export default TwoFactorAuthDrawer;

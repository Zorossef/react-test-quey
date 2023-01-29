import InputWrap from "@/ui/Input";
import { Box, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
const FormProduct = () => {
  const handleValidateForm = (value: any, name: string) => {
    let error;
    if (name) {
      if (!value) {
        error = `${[name]} is required`;
      }
    }
    if (
      name === "discountPercentage" ||
      name === "price" ||
      name === "rating" ||
      name === "stock"
    ) {
      if (isNaN(value)) {
        error = `${[name]} should be a number`;
      }
    }

    return error;
  };

  return (
    <Box p="20px">
      <Formik
        initialValues={{
          brand: "",
          title: "",
          category: "",
          discountPercentage: "",
          price: "",
          rating: "",
          stock: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Box mt="5px">
              <InputWrap
                handleValidateForm={handleValidateForm}
                type="text"
                name={"brand"}
              />
            </Box>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              mt="25px"
            >
              <Box>
                <InputWrap
                  handleValidateForm={handleValidateForm}
                  type="text"
                  name={"title"}
                />
              </Box>
              <Box>
                <InputWrap
                  handleValidateForm={handleValidateForm}
                  type="text"
                  name={"category"}
                />
              </Box>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              mt="25px"
            >
              <Box>
                <InputWrap
                  handleValidateForm={handleValidateForm}
                  type="text"
                  name={"discountPercentage"}
                />
              </Box>
              <Box>
                <InputWrap
                  handleValidateForm={handleValidateForm}
                  type="text"
                  name={"price"}
                />
              </Box>
            </Flex>

            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              mt="25px"
            >
              <Box>
                <InputWrap
                  handleValidateForm={handleValidateForm}
                  type="text"
                  name={"rating"}
                />
              </Box>
              <Box>
                <InputWrap
                  handleValidateForm={handleValidateForm}
                  type="text"
                  name={"stock"}
                />
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
// 1. Introduction to Data Structures and Algorithms
// 2. Arrays and Strings
// 3. Linked Lists
// 4. Stacks and Queues
// 5. Trees
// 6. Heaps
// 7. Hash Tables
// 8. Graphs
// 9. Sorting Algorithms
// 10. Search Algorithms
// 11. Algorithm Design Techniques
// 12. Advanced Data Structures
export default FormProduct;

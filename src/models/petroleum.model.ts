import axios, {AxiosResponse} from 'axios';
import {prisma} from './db.model';

interface typePetroleum {
  year: string;
  petroleum_product: string;
  sale: GLfloat;
  country: string;
}

export async function loadData() {
  try {
    const response: AxiosResponse = await axios.get(
      'https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json'
    );
    const responseData: ResponseType = response.data;
    for (let i = 0; i < responseData.length; i++) {
      //@ts-ignore
      const element: typePetroleum = responseData[i];
      const alreadyExist = await prisma.petroleum.findMany({
        where: {
          year: element.year,
          petroleum_product: element.petroleum_product,
          sale: element.sale,
          country: element.country,
        },
      });
      if (alreadyExist.length === 0) {
        await prisma.petroleum.create({
          data: {
            year: element.year,
            petroleum_product: element.petroleum_product,
            sale: element.sale,
            country: element.country,
          },
        });
      } else {
        i++;
      }
    }
    console.log(`data inserted`);
  } catch (error) {
    console.log(error);
    return error;
  }
}

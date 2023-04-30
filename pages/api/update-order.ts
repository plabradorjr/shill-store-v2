import { prisma } from "@/util/prisma";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const {
      paymentIntentID,
      firstName,
      lastName,
      country,
      address,
      apartment,
      city,
      state,
      zipCode,
    } = req.body;

    try {
      const updatedOrder = await prisma.order.update({
        where: { paymentIntentID },
        data: {
          firstName,
          lastName,
          country,
          address,
          aptSuiteEtc: apartment,
          city,
          state,
          zipCode,
        },
      });

      res.status(200).json(updatedOrder);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update the order" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
